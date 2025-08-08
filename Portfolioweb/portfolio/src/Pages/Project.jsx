import React, { useState } from "react";
import { projects } from "../constant";
import { useTheme } from "../context/ThemeContext";

const Project = () => {
    const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
     // id="work"
      className="py-20 px-6 sm:px-10 md:px-12 lg:px-24 xl:px-32 font-sans bg-gray-700"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">PROJECTS</h2>
        <div className={`w-36 h-1 bg-${theme.name}-${theme.shade} mx-auto mt-3`}></div>
        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
          A showcase of the projects I’ve worked on across frontend, backend, and full-stack development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}

            //   HERE BORDER STYLING

            className={`bg-[#1a1a1a] border-2 border-${theme.name}-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-${theme.name}-500/60 hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-30 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-4 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-sm bg-gray-700 text-${theme.name}-${theme.shade} px-2 py-1 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

     {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
    <div className="bg-[#1f1f1f] rounded-xl shadow-2xl w-full max-w-2xl relative overflow-y-auto scrollbar-hide">
      {/* 👆 Added `scrollbar-hide` to hide scrollbar but keep scrollability */}

      {/* Close button */}
      <button
        onClick={handleCloseModal}
        className={`absolute right-1 text-white text-2xl hover:text-${theme.name}-300 hover:font-extrabold hover:scale-125`}
      >
        &times;
      </button>

      {/* Modal Content (unchanged) */}
      <div className="p-6">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
        <p className="text-lg text-gray-400 mb-4">{selectedProject.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedProject.tags.map((tag, index) => (
            <span
              key={index}
              className={`bg-gray-700 text-${theme.name}-300 text-xl px-2 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center bg-gray-800 hover:text-black hover:bg-${theme.name}-300 text-white py-2 rounded-lg text-sm font-semibold`}
          >
            View Code
          </a>
          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center bg-gray-700 hover:scale-110 border-2 border-${theme.name}-${theme.shade} text-${theme.name}-300 py-2 rounded-lg text-sm font-semibold`}
          >
            View Live
          </a>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Project;
