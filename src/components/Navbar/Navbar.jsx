import { MdClose, MdMenu } from 'react-icons/md';
import ThemeButton from './ThemeButton';
import { useState } from 'react';

const navItems = [
    { id: 'home', href: '#', label: 'Home' },
    { id: 'skills', href: '#skills', label: 'Skills' },
    { id: 'experience', href: '#experience', label: 'Experience' },
    { id: 'projeacts', href: '#projects', label: 'Projects' },
    { id: 'education', href: '#educations', label: 'Educations' },
    { id: 'contact', href: '#contact', label: 'Contact me' },
];
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const linkClick = (itemid) => {
        setMenuOpen(false);
        setActiveLink(itemid);
    };
    console.log(activeLink)
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-colors duration-300">
            <div className="max-w-7xl shadow-md mx-auto px-4 sm:px-6 lg:px-8 border-b-1 border-gray-700">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Title */}
                    <div className="flex-shrink-0 font-sans">
                        <a href="#" className="uppercase text-xl font-bold text-gray-900 dark:text-white">
                            <span className="text-purple-800 ">&lt;</span>
                            <span className="mx-0.5 ">Nitin</span>
                            <span className="text-purple-800 ">&gt;</span>
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block uppercase">
                        <div className="ml-10 flex items-baseline space-x-3">
                            {navItems.map((item) => (
                                <a href={item.href} key={item.id} onClick={() => linkClick(item.id)} className={` hover:text-purple-500 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeLink == item.id ? 'text-purple-600' : ''}`}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ThemeButton />
                        <button onClick={() => setMenuOpen(!menuOpen)} className="relative w-8 h-8 flex items-center justify-center md:hidden rounded border">
                            <span className={`absolute transition-all duration-300 ${menuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
                                <MdMenu size={24} />
                            </span>
                            <span className={`absolute transition-all duration-300 ${menuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}>
                                <MdClose size={24} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden w-full border-b-1 border-gray-700 text-center uppercase transition-all duration-400 ease-in-out ${menuOpen ? 'h-fit left-0 opacity-100' : 'h-0 -left-[999px] opacity-0'}`}>
                <div className="">
                    {navItems.map((item, i) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => linkClick(item.id)}
                            className={`block  px-3 py-2 text-base font-medium hover:bg-purple-600 dark:hover:bg-purple-400 transform transition-all duration-500 ease-out ${activeLink === item.id ? 'text-purple-600' : ''}
                        ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                            style={{ transitionDelay: `${i * 60}ms` }}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
