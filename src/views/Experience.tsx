import { Rabbit } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import SkillsCard from "../components/SkillsCard";
import ExperienceCard from "../components/ExperienceCard";
import Layout from "../components/Layout";
import MotionSection from "../components/MotionSection";
import { useAnalytics } from "../hooks/useAnalytics";

const skillsArray = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
  "Tailwind CSS",
  "TinaCMS",
  "Directus",
  "CMS Architecture",
  "Component Development",
  "Node.js",
  "REST APIs",
  "Git / GitHub",
  "Vercel Deployment",
  "PostHog Analytics",
  "Legacy Code Modernization",
  "WordPress",
  "PHP",
  "jQuery",
  "Accessibility (ADA / WCAG)",
];

const experiences = [
  {
    company: "MOD Worldwide",
    job: "Web Developer",
    year: "March 2025 - Present",
    content: `I built the MOD company website from the ground up, creating a reusable publishing platform for the agency.

At MOD, a digital agency working with large organizations including Aetna, Comcast Business, and Xumo, I spend most of my time jumping between very different codebases and making them better.

A big part of my work involves migrating Aetna employee benefit microsites into our internal template built on TinaCMS. These sites have strict accessibility requirements such as ADA and WCAG compliance, so the goal is to turn complex benefit information into something clean, fast, and accessible for thousands of employees.

On the Comcast and Xumo side, I help build and maintain websites powered by Directus. This includes everything from marketing pages to press releases and internal tools like a newsletter template builder.`,
    highlights: [
      "Built the MOD company website from the ground up",
      "Migrated enterprise healthcare microsites into accessible CMS templates",
      "Maintained and modernized legacy systems including jQuery, WordPress, PHP, and Svelte applications",
    ],
    caseStudy: "/works/modworldwide",
  },
  {
    company: "TechnologyAdvice",
    job: "Software Engineer Intern",
    year: "May 2024 - Aug 2024",
    content:
      "I joined a full-stack team working in PHP, Laravel, and Vue.js, shipping production features within my first few weeks.",
    highlights: [
      "Implemented API endpoints and UI improvements",
      "Worked with product, design, and QA through Agile delivery",
    ],
  },
];

export const Experience = () => {
  const { track } = useAnalytics();

  return (
    <Layout title="experience">
      <MotionSection delay={0.2}>
        <Container>
          <nav aria-label="breadcrumb" className="mb-5 breadcrumb-font">
            <Link
              to="/"
              onClick={() => {
                track("breadcrumb_navigated", {
                  destination: "/",
                  context: "experience",
                });
              }}
              className="text-pink-500 hover:underline cursor-pointer"
            >
              Home
            </Link>
            <span
              aria-hidden="true"
              className="mx-1 inline-block"
              style={{ color: "#ec4899" }}
            >
              /
            </span>
            <h1 className="inline-block text-white text-2xl font-medium">
              Experience
            </h1>
          </nav>

          <div className="relative mb-6">
            <hr className="border-gray-400 w-4/5 mx-auto" />
            <div className="absolute inset-x-0 top-0 flex justify-center -mt-5">
              <Link
                to="/mole"
                aria-label="Play whack-a-mole"
                className="text-white hover:text-pink-400 transition-colors duration-200"
                onClick={() =>
                  track("experience_game_entry_clicked", {
                    destination: "/mole",
                    entry_point: "experience_rabbit",
                  })
                }
              >
                <Rabbit size={40} weight="fill" className="counter-rotate" />
              </Link>
            </div>
          </div>

          {experiences.map((experience, index) => (
            <React.Fragment
              key={`${experience.company}-${experience.year}-${index}`}
            >
              <ExperienceCard
                company={experience.company}
                job={experience.job}
                year={experience.year}
                content={experience.content}
                highlights={experience.highlights}
                caseStudy={experience.caseStudy}
              />
              {index < experiences.length - 1 && (
                <hr className="my-8 border-gray-600" />
              )}
            </React.Fragment>
          ))}
          <div className="mt-8 border-t border-white/15 pt-6">
            <SkillsCard skills={skillsArray} />
          </div>
        </Container>
      </MotionSection>
    </Layout>
  );
};
