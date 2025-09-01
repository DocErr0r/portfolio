import { useTheme } from 'next-themes';
import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FaDisplay } from 'react-icons/fa6';

function ThemeButton() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const getTheme = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        return currentTheme === 'dark' ? <FaMoon /> : <FaSun />;
    };
    return (
        <div className="flex items-center gap-3 relative">
            {/* Toggle button */}
            <button onClick={() => setOpen(!open)} className="px-3 py-2 rounded bg-blue-200 dark:bg-gray-800">
                {getTheme()}
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
