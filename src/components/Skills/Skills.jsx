import { SkillsInfo } from '../../constants';
import Tilts from 'react-parallax-tilt';

const Skills = () => {
    return (
        <div className="px-4 py-12 bg-skill font-sans clipPath-y">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                <span className="border-b-3 border-purple-600">Skills</span>
            </h2>
            <h3 className="text-gray-400 text-lg font-semibold text-center mb-4">A collection of technical skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 justify-between py-2 px-4 sm:px-12 md:px-16 space-y-10 mb-6">
                {SkillsInfo.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="backdrop-blur-md px-4 sm:px-6 py-5 sm:py-3 rounded-2xl border shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300 text-center">{category.title}</h3>

                        <Tilts className="" tiltMaxAngleX={20} tiltMaxAngleY={20} gyroscope={true} transitionSpeed={1000} scale={1.05}>
                            <div className="grid grid-cols-4 sm:grid-cols-3  w-full gap-1.5">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex align-middle items-center justify-center space-x-2 bg-transparent border border-gray-500 rounded-3xl py-1 px-1 sm:px-2 overflow-hidden ">
                                        <img src={skill.logo} alt={skill.name} className="w-4 sm:w-6 h-4 sm:h-6 mb-2 object-contain" />
                                        <span className="text-sm hidden sm:flex font-medium text-gray-700 dark:text-gray-300 ">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Tilts>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
