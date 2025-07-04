import { useEffect, useState } from 'react';

export const usePageState = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [activeSection, setActiveSection] = useState('Home');
    const [isOverInput, setIsOverInput] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Handle mouse over input elements
    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.contentEditable === 'true') {
                setIsOverInput(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.contentEditable === 'true') {
                setIsOverInput(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    // Initialize theme and loading state
    useEffect(() => {
        const storedMode = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialMode = storedMode || (prefersDark ? 'dark' : 'light');
        setMode(initialMode);
        setIsLoaded(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Apply theme to document
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem('theme', mode);

        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
    }, [mode, isLoaded]);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            const storedTheme = localStorage.getItem('theme');
            if (!storedTheme) {
                setMode(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Intersection observer for active section
    useEffect(() => {
        const sections = ['Home', 'About', 'Project', 'Contact'];
        const observers: IntersectionObserver[] = [];

        sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveSection(sectionId);
                        }
                    },
                    {
                        threshold: 0.2,
                        rootMargin: '-10% 0px -10% 0px'
                    }
                );
                observer.observe(section);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return {
        mode,
        activeSection,
        isOverInput,
        isLoaded,
        isLoading,
        toggleMode
    };
}; 