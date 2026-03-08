import React, { useEffect, useRef } from "react";

interface NoiseProps {
  opacity?: number;
  speed?: number;
  scale?: number;
  color?: string;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const hexToRgb = (hex: string): [number, number, number] => {
  const normalized = hex.replace("#", "").trim();
  const fullHex =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  const int = Number.parseInt(fullHex, 16);
  if (Number.isNaN(int) || fullHex.length !== 6) return [255, 255, 255];

  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
};

const Noise: React.FC<NoiseProps> = ({
  opacity = 0.15,
  speed = 0.05,
  scale = 1.2,
  color = "#ffffff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId = 0;
    let lastTimestamp = 0;
    const refreshMs = Math.max(16, speed * 1000);
    const alpha = Math.floor(clamp(opacity, 0, 1) * 255);
    const [r, g, b] = hexToRgb(color);
    const scaleFactor = Math.max(1, scale);

    const resize = () => {
      const parent = canvas.parentElement;
      const renderWidth = parent?.clientWidth ?? window.innerWidth;
      const renderHeight = parent?.clientHeight ?? window.innerHeight;
      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = Math.max(
        1,
        Math.floor((renderWidth * pixelRatio) / scaleFactor),
      );
      canvas.height = Math.max(
        1,
        Math.floor((renderHeight * pixelRatio) / scaleFactor),
      );
      canvas.style.width = `${renderWidth}px`;
      canvas.style.height = `${renderHeight}px`;
    };

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const intensity = 0.25 + Math.random() * 0.75;
        data[i] = Math.floor(r * intensity);
        data[i + 1] = Math.floor(g * intensity);
        data[i + 2] = Math.floor(b * intensity);
        data[i + 3] = alpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = (timestamp: number) => {
      if (timestamp - lastTimestamp >= refreshMs) {
        drawNoise();
        lastTimestamp = timestamp;
      }
      animationId = window.requestAnimationFrame(loop);
    };

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    window.addEventListener("resize", resize);
    resize();
    drawNoise();
    animationId = window.requestAnimationFrame(loop);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [opacity, speed, scale, color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default Noise;
