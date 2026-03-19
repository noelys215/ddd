import React, { ReactNode, useEffect } from "react";
// import backgroundImage from '../assets/static.gif';
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";
import Noise from "./Noise";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const location = useLocation();
  const { track } = useAnalytics();

  useEffect(() => {
    track("page_viewed", {
      page_title_key: title,
      route_path: location.pathname,
      route_depth: location.pathname.split("/").filter(Boolean).length,
    });
  }, [location.pathname, title, track]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const isMailOrTel =
        href.startsWith("mailto:") || href.startsWith("tel:");
      let isExternal = isMailOrTel;

      if (!isExternal) {
        try {
          const absoluteUrl = new URL(href, window.location.origin);
          isExternal = absoluteUrl.origin !== window.location.origin;
        } catch {
          return;
        }
      }

      if (!isExternal) return;

      track("outbound_link_clicked", {
        source_path: window.location.pathname,
        destination_url: href,
        link_label:
          anchor.getAttribute("aria-label") ||
          anchor.textContent?.trim().slice(0, 80) ||
          "unknown",
      });
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [track]);

  return (
    <section
      className="relative flex flex-col justify-center items-center min-h-screen w-full bg-black p-6 font-custom overflow-x-hidden"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundSize: 'contain',
        minHeight: "100vh",
        // filter: "brightness(90%)",
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Noise opacity={0.13} speed={0.04} scale={1.3} color="#ffffff" />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_12%,rgba(0,0,0,0.12)_60%,rgba(0,0,0,0.26)_100%)]" />
      <Helmet>
        <title>{`_henry [ ${title} ]`}</title>
        {/* <meta name="description" content={`Page about ${title}`} /> */}
      </Helmet>
      <div className="relative z-10 flex flex-col justify-center items-center space-y-6 w-full max-w-full">
        {children}
      </div>
    </section>
  );
};

export default Layout;
