"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "./magnetic-hover-button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Hero({
  eyebrow = "NEXT-GEN PRODUCTIVITY",
  title,
  subtitle,
  ctaLabel = "Vamos começar",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-[620px]
        w-full
        flex-col
        items-center
        overflow-hidden
        px-5
        
        
        text-center
        text-white

        sm:min-h-[780px]
        sm:px-8
        
        

        md:min-h-[820px]
        md:px-12
        

        lg:min-h-[100svh]
        lg:px-20
        

        xl:px-[100px]
      "
    >
      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-40
          bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:3.5rem_3.5rem]

          sm:bg-[size:4rem_4rem]

          md:bg-[size:5rem_5rem]

          [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_85%)]
        "
      />

      {/* =====================================================
          GRADIENTE CENTRAL
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[5%]
          z-0
          h-[280px]
          w-[100vw]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse,rgba(255,255,255,0.08)_0%,transparent_65%)]
          blur-3xl

          sm:top-[6%]
          sm:h-[350px]

          md:top-[7%]
          md:h-[450px]

          lg:top-[8%]
          lg:h-[520px]
          
        "
      />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[1200px]
          flex-1
          flex-col
          items-center
          justify-center
        "
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {/* =================================================
            EYEBROW
        ================================================== */}

        {eyebrow && (
          <motion.a
            href={ctaHref}
            className="
              group
              mb-5

              sm:mb-6

              md:mb-7

              lg:mb-8
            "
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-jakarta)",
              }}
              className="
                flex
                w-fit
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.08em]
                text-white/60
                backdrop-blur-sm
                transition-all
                duration-300

                sm:px-5
                sm:py-2.5
                sm:text-xs

                md:px-6
                md:text-sm

                group-hover:border-white/20
                group-hover:text-white
              "
            >
              {eyebrow}

              <ChevronRight
                className="
                  ml-1.5
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300

                  sm:ml-2
                  sm:h-4
                  sm:w-4

                  group-hover:translate-x-1
                "
              />
            </span>
          </motion.a>
        )}

        {/* =================================================
            TÍTULO
        ================================================== */}

        <motion.h1
          style={{
            fontFamily: "var(--font-zodiak)",
          }}
          className="
            mx-auto
            w-full
            max-w-[1000px]
            px-1
            text-balance
            font-bold
            text-white

            text-[40px]
            leading-[0.98]
            tracking-[-0.055em]

            sm:max-w-[800px]
            sm:text-[52px]
            sm:leading-[0.95]

            md:max-w-[950px]
            md:text-[68px]

            lg:text-[88px]

            xl:text-[88px]
          "
          variants={{
            hidden: {
              opacity: 0,
              y: 45,
              filter: "blur(8px)",
            },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {title}
        </motion.h1>

        {/* =================================================
            SUBTÍTULO
        ================================================== */}

        <motion.p
          style={{
            fontFamily: "var(--font-jakarta)",
          }}
          className="
            mx-auto
            mt-5
            max-w-[330px]
            text-pretty
            text-[14px]
            leading-[1.5]
            tracking-[-0.02em]
            text-white/50

            sm:mt-6
            sm:max-w-[520px]
            sm:text-base

            md:mt-7
            md:max-w-[650px]
            md:text-lg

            lg:mt-8
            lg:max-w-[750px]
            lg:text-xl
          "
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {subtitle}
        </motion.p>

        {/* =================================================
            CTA
        ================================================== */}

        {ctaLabel && (
          <motion.div
            className="
              mt-7

              sm:mt-8

              md:mt-9

              lg:mt-10
            "
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
                scale: 0.96,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <MagneticButton label={ctaLabel} />
          </motion.div>
        )}
      </motion.div>

      {/* =====================================================
          MEIA LUA
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[78%]
          z-[5]
          h-[180px]
          w-[550px]
          -translate-x-1/2
          rounded-[50%]
          bg-transparent
          shadow-[0_-10px_50px_rgba(255,255,255,0.28)]

          sm:top-[76%]
          sm:h-[240px]
          sm:w-[750px]

          md:top-[74%]
          md:h-[320px]
          md:w-[1100px]

          lg:top-[72%]
          lg:h-[520px]
          lg:w-[1900px]
        "
      />

      {/* =====================================================
          BRILHO DA MEIA LUA
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[78%]
          z-[4]
          h-[90px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_35%,transparent_70%)]
          blur-2xl

          sm:top-[76%]
          sm:h-[120px]
          sm:w-[750px]

          md:top-[74%]
          md:h-[160px]
          md:w-[1100px]

          lg:top-[72%]
          lg:h-[180px]
          lg:w-[1600px]
        "
      />

      {/* =====================================================
          FADE INFERIOR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-[6]
          h-20
          w-full
          bg-gradient-to-t
          from-[rgb(0,0,24)]
          to-transparent

          sm:h-24

          md:h-28

          lg:h-32
        "
      />
    </section>
  );
}