import React from "react";
import BioCard from "../components/BioCard";
import Layout from "../components/Layout";
import whomImage from "../assets/whom.jpeg";
import MotionSection from "../components/MotionSection";
import { useGetLocation } from "../hooks/useGetLocation";

export const Home: React.FC = () => {
  const { city } = useGetLocation();

  const locationMessage = city
    ? `Hi human in ${city}, nice to meet you!`
    : "Hi human, nice to meet you!";

  return (
    <Layout title="home">
      <MotionSection delay={0.2}>
        <BioCard
          imageUrl={whomImage}
          name="Henry Betancourth"
          subtitle="Software Engineer"
          city={city}
          githubUrl="https://github.com/noelys215"
          linkedinUrl="https://www.linkedin.com/in/henry-betancourth/"
          text={`${locationMessage} 
I'm a full-stack software engineer from Southern NJ who enjoys building clean, simple things that look cool and work even cooler.

JavaScript is my bread and butter (React and Next.js, oh yeah), but I'm language-flexible; give me a stack and I'll figure it out. I also enjoy backend work, with Spring Boot and AWS making regular appearances in my toolkit.

I'm always learning, always experimenting, and always trying to build something just a little bit better than the last thing.

So go ahead, click around and explore. There's plenty of nifty stuff here to geek out over.

[ Round and round the rabbits go—what happens next, only a click will show. ]`}
        />
      </MotionSection>
    </Layout>
  );
};
