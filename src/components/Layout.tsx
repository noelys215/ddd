import React, { ReactNode } from "react";
// import backgroundImage from '../assets/static.gif';
import { Helmet } from "react-helmet-async";
import Noise from "./Noise";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
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
