import { useEffect } from 'react';

export function useViewport() {
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        // Initial set
        setVh();

        // Update on resize and orientation change
        window.addEventListener('resize', setVh);
        window.addEventListener('orientationchange', setVh);

        return () => {
            window.removeEventListener('resize', setVh);
            window.removeEventListener('orientationchange', setVh);
        };
    }, []);
}
