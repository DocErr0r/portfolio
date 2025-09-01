import ThemeButton from './ThemeButton';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b-1 border-gray-700 backdrop:blur-2xl shadow-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Title */}
                    <div className="flex-shrink-0">
                        <a href="#about" className=" uppercase text-xl font-bold text-gray-900 dark:text-white">
                            Nitin
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block uppercase">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#about" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                About
                            </a>
                            <a href="#skills" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Skills
                            </a>
                            <a href="#experience" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Experience
                            </a>
                            <a href="#projects" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Projects
                            </a>
                            <a href="#educations" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Educations
                            </a>
                            <a href="#contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>

                    <ThemeButton />
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#about" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                        About
                    </a>
                    <a href="#skills" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                        Skills
                    </a>
                    <a href="#experience" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                        Experience
                    </a>
                    <a href="#projects" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                        Projects
                    </a>
                    <a href="#educations" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                        Educations
                    </a>
                    <a href="#contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
