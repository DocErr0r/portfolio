import { useTheme } from 'next-themes';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FaDisplay } from 'react-icons/fa6';

function ThemeButton() {
    const { setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center gap-3 relative">
            {/* Toggle button */}
            <button onClick={() => setOpen(!open)} className="px-3 py-2 rounded bg-blue-200 dark:bg-gray-800">
                {/* {getTheme()} */}
                <FaSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <FaMoon className="absolute top-2 h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            </button>
            {/* Dropdown select */}
            {open && (
                <div className="absolute top-6 right-0 mt-2 w-32 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg">
                    <button
                        onClick={() => {
                            setTheme('system');
                            setOpen(false);
                        }}
                        className="flex rounded-lg w-full items-center gap-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <FaDisplay size={16} /> System
                    </button>
                    <button
                        onClick={() => {
                            setTheme('dark');
                            setOpen(false);
                        }}
                        className="flex rounded-lg w-full items-center gap-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <FaMoon size={16} />
                        Dark
                    </button>
                    <button
                        onClick={() => {
                            setTheme('light');
                            setOpen(false);
                        }}
                        className="flex rounded-lg w-full items-center gap-2 px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <FaSun size={16} /> Light
                    </button>
                </div>
            )}
        </div>
    );
}
export default ThemeButton;
