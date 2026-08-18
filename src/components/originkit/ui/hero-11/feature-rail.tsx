
"use client";

import { motion, useReducedMotion } from "motion/react";

/** Asset root — flat files in package assets. */
const A = "/originkit/hero-11";

/** ease-out-cubic */
const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

const FEATURES = [
  {
    title: "Ideias ilimitadas",
    subtitle: "Possibilidades infinitas",
  },
  {
    title: "Design exclusivo",
    subtitle: "Feito para sua marca",
  },
] as const;

const SOCIALS = [
  {
    label: "LinkedIn",
    href: undefined,
    icon: `${A}/icons-linkedin.svg`,
  },

  {
    label: "Instagram",
    href: undefined,
    icon: `${A}/icons-instagram.svg`,
  },
] as const;

export const FeatureRail = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      aria-label="Service highlights"
      className="relative z-20 flex w-full max-w-[129px] flex-col items-start gap-8"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: EASE_OUT,
        delay: 0.4,
      }}
    >
      {/* Features */}
      <ul className="flex flex-col gap-4">
        {FEATURES.map((feature) => (
          <li key={feature.title}>
            <p className="text-white">
              {feature.title}
            </p>

            <p className="text-white/60">
              {feature.subtitle}
            </p>
          </li>
        ))}
      </ul>

      {/* Socials */}
      <ul className="flex items-start gap-3">
        {SOCIALS.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              tabIndex={0}
              className="relative inline-flex size-8 items-center justify-center overflow-clip rounded-full border border-solid border-[#999] bg-white/5 p-2 shadow-[0_0_0_1.5px_rgba(0,0,0,0.25),0_6px_12px_0_rgba(0,0,0,0.2)] touch-manipulation transition-opacity duration-200 ease before:absolute before:inset-[-6px] before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-80"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
              }}
            >
              <img
                src={social.icon}
                alt=""
                width={14}
                height={14}
                className="size-3.5"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
};

