function Layout({children}) {
    return (
        <div className="font-sans relative overflow-hidden">
            {/* Polygon background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-900 dark:via-purple-800 dark:to-gray-900">
                <div className="absolute inset-0 opacity-10 dark:opacity-20">
                    <svg width="100%" height="100%" className="absolute inset-0">
                        <defs>
                            <pattern id="polygon-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-300 dark:text-purple-600"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#polygon-pattern)"/>
                    </svg>
                </div>
            </div>
            {children}
        </div>
    );
}
export default Layout;
