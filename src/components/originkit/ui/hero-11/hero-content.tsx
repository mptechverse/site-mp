"use client";

import { motion, useReducedMotion } from "motion/react";
import MagneticButton from "../magnetic-hover-button";

/** ease-out-cubic */
const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

type HeroContentProps = {
  onGetStarted: () => void;
};

export const HeroContent = ({ onGetStarted }: HeroContentProps) => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
        }
      : {
          initial: {
            opacity: 0,
            y: 16,
          },
          animate: {
            opacity: 1,
            y: 0,
          },
          transition: {
            type: "tween" as const,
            duration: 0.45,
            ease: EASE_OUT,
            delay,
          },
        };

  return (
    <div
      className="
        relative
        z-20
        flex
        w-full
        max-w-[366px]
        flex-col
        items-center
        gap-5
        text-center

        sm:max-w-[480px]
        sm:gap-6

        md:max-w-[520px]
        md:gap-7

        lg:max-w-[366px]
        lg:items-start
        lg:gap-8
        lg:text-left
      "
    >
      {/* ========================================================
          TEXTOS
      ======================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          items-center
          gap-4
          text-white

          sm:gap-5

          md:gap-6

          lg:items-start
          lg:gap-6
        "
      >
        {/* ======================================================
            TEXTO PEQUENO
        ====================================================== */}

        <motion.p
          {...reveal(0.1)}
          className="
            w-full
            font-jakarta
            text-[13px]
            font-normal
            leading-[1.3]
            tracking-[-0.3px]
            text-white/60

            sm:text-[14px]

            md:text-[16px]

            lg:text-[18px]
            lg:font-light
            lg:leading-5
            lg:tracking-[-0.54px]
          "
        >
          Transformamos ideias em experiências digitais
        </motion.p>

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-3

            sm:gap-4

            md:gap-5

            lg:items-start
            lg:gap-6
          "
        >
          {/* ====================================================
              TÍTULO
          ==================================================== */}

          <motion.h1
            {...reveal(0.18)}
            className="
              w-full
              font-zodiak
              font-bold
              text-[38px]
              leading-[1.02]
              tracking-[-1.2px]
              text-pretty

              sm:max-w-[430px]
              sm:text-[46px]
              sm:tracking-[-1.4px]

              md:max-w-[500px]
              md:text-[56px]
              md:leading-[1.02]
              md:tracking-[-1.6px]

              lg:max-w-none
              lg:text-[57px]
              lg:leading-[1.05]
              lg:tracking-[-1.86px]
            "
          >
            O futuro começa aqui
          </motion.h1>

          {/* ====================================================
              DESCRIÇÃO
          ==================================================== */}

          <motion.p
            {...reveal(0.26)}
            className="
              w-full
              max-w-[290px]
              font-jakarta
              text-[14px]
              font-normal
              leading-[1.45]
              tracking-[-0.28px]
              text-white/60

              sm:max-w-[330px]
              sm:text-[15px]

              md:max-w-[390px]
              md:text-[17px]
              md:leading-[1.5]

              lg:max-w-[339px]
              lg:text-[17px]
              lg:leading-[25.5px]
              lg:tracking-[-0.34px]
            "
          >
            Desenvolvemos interfaces sofisticadas, rápidas e intuitivas,
            pensadas para conectar marcas e pessoas.
          </motion.p>
        </div>
      </div>

      {/* ========================================================
          BOTÃO
      ======================================================== */}

      <motion.div
        {...reveal(0.34)}
        className="
          flex
          justify-center
          font-jakarta

          lg:justify-start
        "
      >
        <MagneticButton label="Vamos começar?" />
      </motion.div>
    </div>
  );
};