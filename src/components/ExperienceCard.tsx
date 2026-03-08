import React from "react";
import Text from "./Text";
import SkillsCard from "./SkillsCard";

interface ExperienceCardProps {
  company: string;
  job: string;
  year: string;
  content: string;
  highlights?: string[];
  skills?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  job,
  year,
  content,
  highlights,
  skills,
}) => {
  return (
    <section>
      <header className="mb-2">
        <h3 className="inline-block text-white text-xl font-medium mb-1">
          {company} | {job}
        </h3>
        <br />
        <h4 className="inline-block text-white text-md font-medium mb-1 italic">
          {year}
        </h4>
      </header>

      <Text text={content} />

      {highlights && highlights.length > 0 && (
        <section className="mt-4 mb-4">
          <h4 className="text-white text-lg font-medium mb-2">Highlights</h4>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={`${company}-highlight-${index}`}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      {skills && <SkillsCard skills={skills} />}
    </section>
  );
};

export default ExperienceCard;
