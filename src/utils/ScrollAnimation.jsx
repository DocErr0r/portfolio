import React, { useEffect, useRef, useState } from 'react';

export default function ScrollAnimate({ children, animation = 'fade-up' }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Set visible when in view
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        // Reset when leaving view (so it can animate again)
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.1 },
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    // Tailwind animation presets
    const animations = {
        'fade-up': 'opacity-0 translate-y-10',
        'fade-down': 'opacity-0 -translate-y-10',
        'fade-left': 'opacity-0 -translate-x-10',
        'fade-right': 'opacity-0 translate-x-10',
        'zoom-in': 'opacity-0 scale-90',
    };

    return (
        <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : animations[animation]}`}>
            {children}
        </div>
    );
}
