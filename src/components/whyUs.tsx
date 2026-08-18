"use client";

import { motion } from "motion/react";
import { Card3D } from "@/components/originkit/ui/animated-3d-card";

export default function PorqueNos() {
  return (
    <section
      className="
        flex
        h-screen
        mx-[100px]
        items-center
        justify-around
        font-jakarta
        text-white
      "
    >
      {/* ==========================================================
          TÍTULO DA SEÇÃO
      ========================================================== */}

      <div className="mb-10 max-w-[50%]">

        {/* TÍTULO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
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
          
          <h1
            className="
              mb-10
              w-full
              max-w-[306px]
              font-zodiak
              font-bold
              text-[56px]
              leading-[1.1]
              tracking-[-1.68px]
              text-pretty

              ipad:max-w-[389px]
              ipad:text-[66px]

              desktop-sm:max-w-none
              desktop-sm:text-[62px]
              desktop-sm:leading-[1.05]
              desktop-sm:tracking-[-1.86px]
            "
          >
            
            Por que nos escolher?
          </h1>
        </motion.div>

        {/* SUBTÍTULO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              max-w-[252px]
              font-jakarta
              text-[16px]
              font-normal
              leading-[1.4]
              tracking-[-0.32px]
              text-white/60

              ipad:max-w-[311px]
              ipad:text-[18px]

              desktop-sm:max-w-[339px]
              desktop-sm:text-[17px]
              desktop-sm:leading-[25.5px]
              desktop-sm:tracking-[-0.34px]
            "
          >
            Unimos design, tecnologia e estratégia para criar experiências
            digitais rápidas, intuitivas e preparadas para acompanhar o
            crescimento do seu negócio.
          </p>
        </motion.div>
      </div>

      {/* ==========================================================
          GRID DOS CARDS
      ========================================================== */}

      <div
        className="
          grid
          max-w-[50%]
          grid-cols-1
          gap-6
          font-jakarta
          md:grid-cols-2
        "
      >
        <Card3D
          title="DESIGN + TECNOLOGIA"
          description="Experiências visuais construídas com uma base tecnológica sólida."
          theme="primary"
        />

        <Card3D
          title="PERFORMANCE"
          description="Aplicações rápidas, leves e eficientes."
          theme="primary"
        />

        <Card3D
          title="EXPERIÊNCIA"
          description="Interfaces pensadas para quem realmente usa."
          theme="primary"
        />

        <Card3D
          title="ESCALABILIDADE"
          description="Sistemas preparados para crescer."
          theme="primary"
        />
      </div>
    </section>
  );
}