import React from "react";
import BioCard from "../components/BioCard";
import Layout from "../components/Layout";
import whomImage from "../assets/whom.jpeg";
import { motion } from "framer-motion";
import { useLocalEnvironment } from "../hooks/useLocalEnvironment";

export const Home: React.FC = () => {
  const { city, weather, error } = useLocalEnvironment(true);

  const locationMessage = city
    ? `Hi human in ${city}, nice to meet you!`
    : "Hi human, nice to meet you!";

  return (
    <Layout title="home">
      <section className="relative w-full max-w-5xl min-h-[68vh] md:min-h-[72vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.992, filter: "blur(8px)" }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.82,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full flex justify-center"
        >
          <BioCard
            imageUrl={whomImage}
            name="Henry Betancourth"
            subtitle="Software Engineer"
            weather={weather}
            weatherError={error}
            githubUrl="https://github.com/noelys215"
            linkedinUrl="https://www.linkedin.com/in/henry-betancourth/"
            text={`${locationMessage} 
I'm a full-stack software engineer from Southern NJ who enjoys building clean, simple things that look cool and work even cooler.

JavaScript is my bread and butter (React and Next.js, oh yeah), but I'm language-flexible; give me a stack and I'll figure it out. I also enjoy backend work, with Spring Boot and AWS making regular appearances in my toolkit.

I'm always learning, always experimenting, and always trying to build something just a little bit better than the last thing.

So go ahead, click around and explore. There's plenty of nifty stuff here to geek out over.

[ Round and round the rabbits go—what happens next, only a click will show. ]`}
          />
        </motion.div>
      </section>
    </Layout>
  );
};
