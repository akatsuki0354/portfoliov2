import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorX, setCursorX] = React.useState(0);
    const [cursorY, setCursorY] = React.useState(0);
    const [attachToParent, setAttachToParent] = React.useState(true);

    useEffect(() => {
        const ref = cursorRef.current;
        if (ref) {
            const handleMouseMove = (e: MouseEvent) => {
                setCursorX(e.clientX);
                setCursorY(e.clientY);
            };
            ref.addEventListener('mousemove', handleMouseMove);
            return () => {
                ref.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    useEffect(() => {
        const ref = cursorRef.current;
        if (ref) {
            const handleMouseEnter = () => {
                setAttachToParent(true);
            };
            const handleMouseLeave = () => {
                setAttachToParent(false);
            };
            ref.addEventListener('mouseenter', handleMouseEnter);
            ref.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                ref.removeEventListener('mouseenter', handleMouseEnter);
                ref.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                left: cursorX,
                top: cursorY,
                width: '20px',
                height: '20px',
                backgroundColor: attachToParent ? 'red' : 'transparent',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999
            }}
        />
    );
};

export default Cursor; 