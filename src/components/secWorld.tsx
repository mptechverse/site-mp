"use client";

import { motion, type Variants } from "motion/react";
import GlobePulse from "./originkit/ui/globe";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SectionUm() {
  return (
    <section
  className="
    relative
    flex
    
    min-h-[620px]
    w-full
    items-center
    overflow-hidden
    px-5
    py-10
    font-jakarta
    text-white

    sm:min-h-[680px]
    sm:px-8
    sm:py-12

    md:min-h-[700px]
    md:px-10
    md:py-10

    lg:min-h-screen
    lg:h-auto
    lg:px-[100px]
    lg:py-16

    xl:py-20
  "
>
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-center
          gap-10

          sm:gap-12

          md:flex-row
          md:items-center
          md:justify-between
          md:gap-8

          lg:gap-16
        "
      >
        {/* ============================================================
            CONTEÚDO
        ============================================================ */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            flex
            w-full
            max-w-[520px]
            flex-col
            items-start
            justify-center
            text-left

            md:max-w-[440px]

            lg:max-w-[500px]
          "
        >
          {/* ========================================================
              TEXTO PEQUENO
          ======================================================== */}

          <motion.div
            variants={item}
            className="
              mb-3
              w-full
            "
          >
            <p
              className="
                font-jakarta
                text-[13px]
                font-normal
                leading-[1.4]
                tracking-[-0.25px]
                text-[#314ea4]

                sm:text-[14px]

                md:text-[15px]

                lg:text-[14px]
                lg:leading-[25.5px]
                lg:tracking-[-0.34px]
              "
            >
              ━━ Tecnologia com propósito
            </p>
          </motion.div>

          {/* ========================================================
              TÍTULO
          ======================================================== */}

          <motion.div
            variants={item}
            className="
              mb-4
              w-full

              sm:mb-5
            "
          >
            <h1
              className="
                w-full
                font-zodiak
                font-bold
                text-[38px]
                leading-[1.02]
                tracking-[-1.2px]
                text-pretty

                sm:text-[46px]
                sm:tracking-[-1.4px]

                md:text-[52px]
                md:leading-[1.04]
                md:tracking-[-1.5px]

                lg:text-[58px]
                lg:leading-[1.05]
                lg:tracking-[-1.86px]
              "
            >
              Não entregamos
              <br />
              apenas código.
            </h1>
          </motion.div>

          {/* ========================================================
              DESCRIÇÃO
          ======================================================== */}

          <motion.div
            variants={item}
            className="
              mb-7
              w-full

              sm:mb-8
            "
          >
            <p
              className="
                max-w-[310px]
                font-jakarta
                text-[14px]
                font-normal
                leading-[1.5]
                tracking-[-0.28px]
                text-white/60

                sm:max-w-[360px]
                sm:text-[15px]

                md:max-w-[390px]
                md:text-[16px]
                md:leading-[1.5]

                lg:max-w-[339px]
                lg:text-[17px]
                lg:leading-[25.5px]
                lg:tracking-[-0.34px]
              "
            >
              Pensamos em estratégia, experiência, performance e negócio em
              cada etapa do desenvolvimento, para conectar sua marca com o
              mundo.
            </p>
          </motion.div>
        </motion.div>

        {/* ============================================================
            GLOBO
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: -40,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            items-center
            justify-center

            md:w-auto
            md:shrink-0
          "
        >
          <GlobePulse
            className="
              w-[240px]

              sm:w-[320px]

              md:w-[400px]

              lg:w-[520px]

              xl:w-[600px]
            "
            speed={0.002}
          />
        </motion.div>
      </div>
    </section>
  );
}