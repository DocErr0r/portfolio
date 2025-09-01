import { TypeAnimation } from 'react-type-animation';
import DotGrid from '../animation/Dotgrid';
import { FaFileAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const About = () => {
    const resumeUrl = import.meta.env.VITE_RESUME_URL;
    return (
        <div className="lg:h-[550px] md:h-[600px] h-[700px]" style={{ width: '100%', position: 'relative' }}>
            <DotGrid dotSize={3} gap={10} baseColor="#5217FF" activeColor="#5227FF" proximity={120} shockRadius={250} shockStrength={5} resistance={750} returnDuration={1.5} />
            <section id="home" className="absolute top-0">
                <div className="py-4 px-[7vw] lg:px-[12vw] font-sans mt-2 md:mt-14 lg:mt-16">
                    <div className="flex flex-col-reverse justify-between md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2 leading-tight font-bold">Hi, I am</h1>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 leading-tight font-bold">NITIN</h2>
                            <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 leading-tight text-purple-600">
                                <span className="text-black dark:text-white">I am a </span>
                                <TypeAnimation sequence={['Full Stack Devloper', 3000, 'Frontend Developer', 3000, 'MERN Stack Devloper', 3000, 'Coder', 3000]} speed={50} wrapper="span" deletionSpeed={50} repeat={Infinity} cursor={true} />
                            </h3>
                            <p className="text-base sm:text-lg md:text-lg mt-2 mb-6 text-justify leading-relaxed dark:font-normal font-semibold bg-gray-300/70 dark:bg-transparent">I am full stack developer with experience in building scalable web applications. Skilled in both Frontend and backednd devlopment, specialize in MERN Stack techonology. Completed an internship at Almanac, contributing to real-world projects. Passionate about writing clean, maintainable code and solving complex technical challenges.</p>
                            <a
                                href={resumeUrl}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mx-3 duration-200 text-white bg-purple-500 font-bold transition hover:scale-105"
                                aria-label="Download resume"
                                rel="noopener noreferrer"
                                target="_blank"
                                style={{
                                    background: 'linear-gradient(90deg,#8245ec,#a855f7)',
                                    boxShadow: '0 0 2px #8245ec ,0 0 2px #8245ec, 0 0 20px #8245ec ',
                                }}>
                                <span className="flex items-center gap-2">
                                    Resume <FaFileAlt />
                                </span>
                            </a>
                        </div>
                        <div className="md:w-1/2 text-center md:text-left flex justify-center md:justify-end mt-8 md:mt-0">
                            <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 rounded-full border-purple-400" tiltMaxAngleX={20} tiltMaxAngleY={20}  gyroscope={true} transitionSpeed={1000} scale={1.05}>
                                <img src={'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'} alt="profile_image" className=" h-full w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
                            </Tilt>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;
