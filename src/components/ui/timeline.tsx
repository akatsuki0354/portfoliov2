"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import TextHeader from "../text-header";
import { TextAnimate } from "../magicui/text-animate";
interface TimelineEntry {
  year: string;
  month: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <TextHeader
        text="Timeline"
      />
     <TextAnimate animation="blurIn" duration={1} as="p" className="text-center text-muted-foreground text-xl max-w-5xl mx-auto mb-10">
  This timeline showcases my journey from being a student to starting my professional career, highlighting the key experiences and milestones along the way.
</TextAnimate>

      <div ref={ref} className="relative max-w-4xl mx-auto px-8 md:px-16 pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.year}
                </h3>
                <p className="text-sm md:text-lg text-neutral-400 dark:text-neutral-600 mt-1">
                  {item.month}
                </p>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4">
                <h3 className="text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.year}
                </h3>
                <p className="text-sm text-neutral-400 dark:text-neutral-600">
                  {item.month}
                </p>
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-24 left-16 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-neutral-400 via-neutral-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
