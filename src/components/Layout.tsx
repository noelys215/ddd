import React, { ReactNode } from "react";
// import backgroundImage from '../assets/static.gif';
import { Helmet } from "react-helmet-async";
import Noise from "./Noise";
// import Dither from "./Dither";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <section
      className="relative flex flex-col justify-center items-center min-h-screen w-full bg-black p-6 font-custom overflow-hidden"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundSize: 'contain',
        minHeight: "100vh",
        // filter: "brightness(90%)",
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Noise opacity={0.11} speed={0.04} scale={1.2} color="#ffffff" />
        {/*
        <Dither
          waveSpeed={0.018}
          waveFrequency={1.6}
          waveAmplitude={0.16}
          waveColor={[0.07, 0.07, 0.07]}
          colorNum={2}
          pixelSize={3}
          disableAnimation={false}
          enableMouseInteraction={false}
        />
        */}
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.15)_60%,rgba(0,0,0,0.32)_100%)]" />
      <Helmet>
        <title>{`_henry [ ${title} ]`}</title>
        {/* <meta name="description" content={`Page about ${title}`} /> */}
      </Helmet>
      <div className="relative z-10 flex flex-col justify-center items-center space-y-6 w-full">
        {children}
      </div>
    </section>
  );
};

export default Layout;
