"use client";

import { motion } from "framer-motion";
import HoverImageReveal from "./originkit/ui/hover-image-reveal";

export default function Projetos() {
  return (
    <section
      className="
        relative
      
        isolate
        flex
        min-h-[560px]
        w-full
        flex-col
        justify-center

        overflow-hidden

        gap-8
        px-5
        py-10

        font-jakarta
        text-white

        sm:min-h-[620px]
        sm:gap-10
        sm:px-8
        sm:py-12

        md:min-h-[680px]
        md:gap-12
        md:px-10
        md:py-14

        lg:min-h-screen
        lg:gap-12
        lg:px-[100px]
        lg:py-16

        xl:gap-16
        xl:py-20
      "
    >
      {/* ============================================================
          TÍTULO
      ============================================================ */}

      <motion.div
        className="
          relative
          z-10
          w-full
          max-w-[900px]
          shrink-0
          text-white
        "
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p
          className="
            mb-3
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
          ━━ Soluções
        </p>

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

            lg:text-[62px]
            lg:leading-[1.05]
            lg:tracking-[-1.86px]
          "
        >
          O que podemos
          <br />
          construir?
        </h1>
      </motion.div>

      {/* ============================================================
          SERVIÇOS
      ============================================================ */}

      <motion.div
        className="
          relative
          z-10
          flex
          w-full
          shrink-0
          justify-center
          font-jakarta
          text-white
        "
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className="
            w-full
            max-w-[1400px]
          "
        >
          <HoverImageReveal />
        </div>
      </motion.div>
    </section>
  );
}