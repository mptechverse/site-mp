"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const words = [
  "Seu",
  "projeto",
  "não",
  "precisa",
  "apenas",
  "funcionar.",
  "Ele",
  "precisa",
  "fazer",
  "sentido.",
];

interface AnimatedWordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function AnimatedWord({
  word,
  index,
  total,
  progress,
}: AnimatedWordProps) {
  const start = (index / total) * 0.7;

  const end = Math.min(
    1,
    ((index + 1.4) / total) * 0.7
  );

  const opacity = useTransform(
    progress,
    [start, end],
    [0.14, 1]
  );

  const isBlue = word === "sentido.";

  return (
    <motion.span
      style={{
        opacity,
        display: "inline-block",
        fontFamily: "var(--font-zodiak)",
      }}
      className={`
        font-bold
        ${
          isBlue
            ? "text-[rgb(7,82,204)]"
            : "text-white"
        }
      `}
    >
      {word}
    </motion.span>
  );
}

export function Editorial() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.65"],
  });

  return (
    <section
      ref={ref}
      className="
        relative
        flex
        min-h-[38vh]
        w-full
        items-center
        px-5
        py-12
        
        text-white

        sm:min-h-[42vh]
        sm:px-8
        sm:py-14

        md:min-h-[46vh]
        md:px-10
        md:py-16

        lg:min-h-[65vh]
        lg:px-[100px]
        lg:py-24

        xl:min-h-[70vh]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        <h2
          style={{
            fontFamily: "var(--font-zodiak)",
          }}
          className="
            flex
            flex-wrap
            justify-center
            text-center
            font-bold
            leading-[1.02]
            tracking-[-0.045em]

            gap-x-2
            gap-y-0.5

            text-[34px]

            sm:text-[42px]
            sm:gap-x-2
            sm:gap-y-1

            md:text-[50px]
            md:gap-x-3
            md:gap-y-1

            lg:text-[64px]
            lg:leading-[1.05]
            lg:tracking-[-0.04em]
            lg:gap-x-4
            lg:gap-y-2

            xl:text-[72px]
          "
        >
          {words.map((word, index) => (
            <AnimatedWord
              key={`${word}-${index}`}
              word={word}
              index={index}
              total={words.length}
              progress={scrollYProgress}
            />
          ))}
        </h2>
      </div>
    </section>
  );
}