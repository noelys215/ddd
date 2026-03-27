import { useEffect, useState } from "react";

export interface WeatherData {
  main: string;
  description: string;
}

interface LocalEnvironmentState {
  city: string | null;
  weather: WeatherData | null;
  error: string | null;
}

const formatCityName = (name: string): string =>
  name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const isValidCityValue = (value: string): boolean => {
  const normalized = value.trim().toLowerCase();

  if (!normalized) return false;
  if (normalized.includes("geocode.xyz")) return false;
  if (normalized.includes("throttled")) return false;
  if (normalized.includes("pricing")) return false;
  if (normalized.startsWith("error")) return false;

  return true;
};

const parseCachedWeather = (raw: string): WeatherData | null => {
  try {
    const parsed = JSON.parse(raw) as Partial<WeatherData>;
    if (!parsed.main || !parsed.description) return null;
    return { main: parsed.main, description: parsed.description };
  } catch {
    return null;
  }
};

export const useLocalEnvironment = (
  enabled: boolean,
): LocalEnvironmentState => {
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const cachedCity = sessionStorage.getItem("city");
    const cachedWeather = sessionStorage.getItem("weatherData");
    const parsedWeather = cachedWeather
      ? parseCachedWeather(cachedWeather)
      : null;

    const hasCachedCity = Boolean(cachedCity && isValidCityValue(cachedCity));
    const hasCachedWeather = Boolean(parsedWeather);

    if (hasCachedCity) {
      setCity(formatCityName(cachedCity!));
    } else if (cachedCity) {
      sessionStorage.removeItem("city");
    }

    if (hasCachedWeather) {
      setWeather(parsedWeather);
    } else if (cachedWeather) {
      sessionStorage.removeItem("weatherData");
    }

    if (hasCachedCity && hasCachedWeather) {
      setError(null);
      return;
    }

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      return;
    }

    let cancelled = false;

    const fetchCity = async (lat: number, lon: number) => {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
      );

      if (!response.ok) {
        throw new Error(
          `BigDataCloud request failed with status ${response.status}`,
        );
      }

      const data = (await response.json()) as {
        city?: string;
        locality?: string;
      };

      const resolvedCity = data.city || data.locality;
      if (!resolvedCity || !isValidCityValue(resolvedCity)) {
        sessionStorage.removeItem("city");
        if (!cancelled) setCity(null);
        return;
      }

      const formattedCity = formatCityName(resolvedCity);
      sessionStorage.setItem("city", formattedCity);
      if (!cancelled) setCity(formattedCity);
    };

    const fetchWeather = async (lat: number, lon: number) => {
      const apiKey = import.meta.env.VITE_WEATHER_KEY?.trim();
      if (!apiKey) {
        throw new Error("Missing weather API key");
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      );

      if (!response.ok) {
        throw new Error(
          `OpenWeather request failed with status ${response.status}`,
        );
      }

      const data = await response.json();
      if (!data?.weather?.[0]?.main || !data?.weather?.[0]?.description) {
        throw new Error(
          "OpenWeather response missing expected weather fields",
        );
      }

      const weatherData: WeatherData = {
        main: data.weather[0].main,
        description: data.weather[0].description,
      };

      sessionStorage.setItem("weatherData", JSON.stringify(weatherData));
      if (!cancelled) setWeather(weatherData);
    };

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          await Promise.all([
            hasCachedCity ? Promise.resolve() : fetchCity(latitude, longitude),
            hasCachedWeather
              ? Promise.resolve()
              : fetchWeather(latitude, longitude),
          ]);

          if (!cancelled) setError(null);
        } catch (fetchError) {
          console.error("Error fetching environment data:", fetchError);
          if (!cancelled) {
            setError("Unable to fetch local environment data");
          }
        }
      },
      (geoError) => {
        console.error("Error getting location:", geoError);
        if (!cancelled) {
          setError("Unable to retrieve location");
        }
      },
    );

    return () => {
      cancelled = true;
    };
  }, [enabled]);

  return { city, weather, error };
};
