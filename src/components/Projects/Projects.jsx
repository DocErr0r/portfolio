import { projects } from '../../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="font-sans relative overflow-hidden">
            <div className=" px-4 py-12 relative z-10 bg-skill clipPath-y">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                    <span className="border-b-3 border-purple-600">Projects</span>
                </h2>
                <h3 className="text-gray-400 text-lg font-semibold text-center mb-8">A showcase of my work</h3>

                <div className="flex flex-col space-y-12 py-2 mb-6 pb-8 px-4 sm:px-12 md:px-16">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`flex flex-col md:flex-row items-center rounded-2xl shadow-[0_0_20px_10px_rgba(130,69,236,0.3)] bg-white dark:bg-gray-800 transition-transform duration-300 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full md:w-1/2 h-64 object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            )}
                            <div className="p-6 md:w-1/2 flex flex-col">
                                <h4 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.duration}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-grow">{project.description}</p>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 border px-3 py-1 rounded-2xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            <FaGithub size={18} />
                                            <span className="text-sm">Repository</span>
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border px-3 py-1 rounded-2xl text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            <FaExternalLinkAlt size={18} />
                                            <span className="text-sm">Live</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
