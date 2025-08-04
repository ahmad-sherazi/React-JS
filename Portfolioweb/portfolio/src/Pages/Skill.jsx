import React from "react";
import { SkillsInfo } from "../constant"; // Adjust the path based on your file structure
import Tilt from "react-parallax-tilt";
import { useTheme } from "../context/ThemeContext";

const Skill = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient bg-black clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className={`w-24 h-1 bg-${theme.name}-${theme.shade} mx-auto mt-2`}></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various
          projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className={`bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border-2 border-${theme.name}-300 
  shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on larger screens */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full text-center pr-12">
                {category.skills.map((skill) => (
                  <div
  key={skill.name}
  className="flex flex-col items-center justify-center border-2 border-gray-900 rounded-full w-10 h-10 sm:w-28 sm:h-28 transition-transform hover:scale-105 hover:border-white "
>
  <img
    src={skill.logo}
    alt={`${skill.name} logo`}
    className="w-10 h-10 object-contain mb-1 p-1"
    style={{ maxWidth: '40px', maxHeight: '40px' }}
  />
  <span className="text-xs sm:text-sm text-gray-300 font-medium">{skill.name}</span>
</div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
