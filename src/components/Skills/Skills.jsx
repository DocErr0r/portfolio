import { SkillsInfo } from '../../constants';
import Tilts from 'react-parallax-tilt';

const Skills = () => {
    return (
        <div id="skills" className=" relative px-4 py-12 bg-skill font-sans clipPath-y">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                <span className="border-b-3 border-purple-600">Skills</span>
            </h2>
            <h3 className="text-gray-400 text-lg font-semibold text-center mb-4">A collection of technical skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 py-2 px-4 sm:px-12 md:px-16 mb-6">
                {SkillsInfo.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="backdrop-blur-md dark:bg-gray-700/20 bg-pink-300/20 px-4 sm:px-6 py-5 sm:py-3 rounded-2xl border shadow-[0_0_20px_1px_rgba(130,69,236,0.4)]">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300 text-center">{category.title}</h3>

                        <Tilts className="" tiltMaxAngleX={20} tiltMaxAngleY={20} gyroscope={true} transitionSpeed={1000} scale={1.05}>
                            <div className="grid sm:grid-cols-4 md:grid-cols-3 xs:grid-cols-3 grid-cols-2 w-full gap-0.5 sm:gap-1.5">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex align-middle items-center justify-center space-x-2 bg-transparent border border-gray-500 rounded-3xl py-2 px-2 sm:px-2 overflow-x-clip ">
                                        <img src={skill.logo} alt={skill.name} className="w-5 md:w-6 h-5 md:h-6 object-contain" />
                                        <span className="sm:text-sm text-xs font-medium text-gray-700 dark:text-gray-300 ">{skill.name}</span>
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
