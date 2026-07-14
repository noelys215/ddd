import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_OG_IMAGE,
  SITE_AUTHOR,
  SITE_KEYWORDS,
  SITE_NAME,
  getSeoPage,
  getSiteUrl,
  toAbsoluteUrl,
} from "../config/seo";

type SeoProps = {
  titleKey: string;
};

const buildJsonLd = (
  page: ReturnType<typeof getSeoPage>,
  canonicalUrl: string,
  imageUrl: string,
) => {
  const person = {
    "@type": "Person",
    name: SITE_AUTHOR,
    url: canonicalUrl,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/noelys215",
      "https://www.linkedin.com/in/henry-betancourth/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "CMS architecture",
      "Backend APIs",
      "AI applications",
      "Accessibility",
    ],
  };

  if (page.type === "article") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      headline: page.title,
      description: page.description,
      url: canonicalUrl,
      image: imageUrl,
      author: person,
      creator: person,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: page.title,
    description: page.description,
    url: canonicalUrl,
    image: imageUrl,
    mainEntity: person,
  };
};

export const Seo = ({ titleKey }: SeoProps) => {
  const location = useLocation();
  const siteUrl = getSiteUrl();
  const page = getSeoPage(location.pathname, titleKey);
  const canonicalUrl = toAbsoluteUrl(page.path, siteUrl);
  const imageUrl = toAbsoluteUrl(page.image || DEFAULT_OG_IMAGE, siteUrl);
  const keywords = [...SITE_KEYWORDS, ...(page.keywords ?? [])].join(", ");
  const robots = page.noindex ? "noindex, nofollow" : "index, follow";
  const jsonLd = buildJsonLd(page, canonicalUrl, imageUrl);

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="author" content={SITE_AUTHOR} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:type" content={page.type ?? "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={page.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};
