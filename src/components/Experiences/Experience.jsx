import { experiences } from '../../constants';
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className="relative font-sans overflow-hidden">
            <div className="px-4 py-12  z-10">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                    <span className="border-b-3 border-purple-600">Experience</span>
                </h2>
                <h3 className="text-gray-400 text-lg font-semibold text-center mb-8">My professional journey</h3>

                <div className="flex flex-col space-y-8 py-2 px-4 sm:px-10 md:px-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="flex flex-col md:flex-row items-start rounded-2xl border shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] dark:bg-gray-800 transition-transform duration-300 p-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaBuilding className="text-purple-600 text-xl" />
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.company}</h4>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <FaMapMarkerAlt className="text-gray-500 text-sm" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.type}</span>
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaCalendarAlt className="text-gray-500 text-sm" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</span>
                                </div>
                                <h5 className="text-lg font-medium mb-3 text-purple-600 dark:text-purple-400">{exp.role}</h5>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.skills.map((skill, idx) => (
                                        <span key={idx} className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
