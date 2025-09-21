'use client';
import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  Variant,
} from 'motion/react';
import { cn } from '@/lib/utils';

export type CursorProps = {
  children: React.ReactNode;
  className?: string;
  springConfig?: SpringOptions;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
};

export function Cursor({
  children,
  className,
  springConfig,
  attachToParent,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!attachToParent);
  const [isOverPointer, setIsOverPointer] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      cursorX.set(window.innerWidth / 2);
      cursorY.set(window.innerHeight / 2);
    }
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (!attachToParent) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }

    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      onPositionChange?.(e.clientX, e.clientY);

      // Check if the element under the cursor has pointer cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const computedStyle = window.getComputedStyle(elementUnderCursor);
        const cursorStyle = computedStyle.cursor;
        setIsOverPointer(cursorStyle === 'pointer' || cursorStyle === 'grab' || cursorStyle === 'grabbing');
      } else {
        setIsOverPointer(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [cursorX, cursorY, onPositionChange, attachToParent]);

  const cursorXSpring = useSpring(cursorX, springConfig || { duration: 0 });
  const cursorYSpring = useSpring(cursorY, springConfig || { duration: 0 });

  useEffect(() => {
    const handleVisibilityChange = (visible: boolean) => {
      setIsVisible(visible);
    };

    const currentCursorRef = cursorRef.current;
    if (attachToParent && currentCursorRef) {
      const parent = currentCursorRef.parentElement;
      if (parent) {
        const mouseEnterHandler = () => {
          parent.style.cursor = 'none';
          handleVisibilityChange(true);
        };
        const mouseLeaveHandler = () => {
          parent.style.cursor = 'auto';
          handleVisibilityChange(false);
        };
        
        parent.addEventListener('mouseenter', mouseEnterHandler);
        parent.addEventListener('mouseleave', mouseLeaveHandler);

        return () => {
          parent.removeEventListener('mouseenter', mouseEnterHandler);
          parent.removeEventListener('mouseleave', mouseLeaveHandler);
        };
      }
    }
  }, [attachToParent]);

  // Hide cursor when over pointer elements
  const shouldShowCursor = isVisible && !isOverPointer;

  return (
    <motion.div
      ref={cursorRef}
      className={cn('pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center', className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <AnimatePresence>
        {shouldShowCursor && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
            className="flex items-center justify-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
