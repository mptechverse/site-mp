"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { Label, Reveal } from "./originkit/ui/reveal";

const events = [
  {
    id: "1",
    date: "Etapa 01",
    title: "Entender",
    description:
      "Conversamos com sua equipe para entender o negócio, os desafios e o que o sistema precisa resolver. Assim, começamos o projeto com uma visão clara do problema.",
  },
  {
    id: "2",
    date: "Etapa 02",
    title: "Planejar",
    description:
      "Organizamos as funcionalidades, os fluxos e o escopo do sistema. Definimos o que será desenvolvido e como cada parte irá funcionar.",
  },
  {
    id: "3",
    date: "Etapa 03",
    title: "Projetar",
    description:
      "Criamos a estrutura das telas, a experiência de uso e o design do sistema. Antes de programar, você consegue visualizar como tudo irá funcionar.",
  },
  {
    id: "4",
    date: "Etapa 04",
    title: "Desenvolver",
    description:
      "Transformamos o projeto em um sistema funcional. Desenvolvemos as telas, funcionalidades, banco de dados e integrações necessárias.",
  },
  {
    id: "5",
    date: "Etapa 05",
    title: "Testar",
    description:
      "Testamos o sistema na prática, identificamos erros e ajustamos o que for necessário para garantir que tudo funcione como planejado.",
  },
  {
    id: "6",
    date: "Etapa 06",
    title: "Entrega e Suporte",
    description:
      "Colocamos o sistema em funcionamento e acompanhamos sua utilização. Após a entrega, oferecemos suporte para correções, melhorias e novas necessidades da empresa.",
  },
];

export default function Passoapasso() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 40%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      id="processo"
      className="
        relative
        overflow-hidden
        py-20
        font-jakarta

        sm:py-24
        md:py-28

        lg:mx-[100px]
        lg:py-28
      "
    >
      {/* ==========================================================
          GRID DE FUNDO
      ========================================================== */}

      <div
        className="
          tech-grid
          grid-fade
          absolute
          inset-0
          z-0
          opacity-60
        "
        aria-hidden
      />

      {/* ==========================================================
          CONTEÚDO
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]

          px-5
          sm:px-8
          md:px-10

          lg:px-12
        "
      >
        {/* ========================================================
            CABEÇALHO
        ======================================================== */}

        <Reveal>
          <Label>Nosso processo</Label>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="
              mt-4
              max-w-[300px]
              font-jakarta
              text-[13px]
              font-normal
              leading-[1.4]
              tracking-[-0.25px]
              text-[#314ea4]

              sm:max-w-[320px]
              sm:text-[14px]

              md:max-w-[340px]
              md:text-[15px]

              lg:max-w-[339px]
              lg:text-[14px]
              lg:leading-[25.5px]
              lg:tracking-[-0.34px]
            "
          >
            ━━ Processo
          </p>

          <h2
            className="
              mt-5
              max-w-[650px]
              font-zodiak
              text-[2.25rem]
              font-bold
              leading-[1.02]
              tracking-[-1.2px]
              text-white

              sm:mt-6
              sm:text-[2.75rem]
              sm:tracking-[-1.4px]

              md:mt-7
              md:text-[3.25rem]

              lg:mt-8
              lg:text-[4.25rem]
              lg:leading-[1.05]
              lg:tracking-[-1.5px]
            "
          >
            Como um projeto
            <br />
            ganha vida.
          </h2>
        </Reveal>

        {/* ========================================================
            PROCESSO
        ======================================================== */}

        <div
          className="
            relative
            mt-14

            sm:mt-16

            md:mt-20

            lg:mt-24
          "
        >
          {/* ======================================================
              LINHA PRINCIPAL
              SOMENTE DESKTOP
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-white/10

              lg:block
            "
          >
            <motion.div
              className="
                absolute
                left-0
                top-0
                w-[2px]
                bg-white
              "
              style={{
                height: "100%",
                scaleY: smoothProgress,
                transformOrigin: "top",
              }}
            />
          </div>

          {/* ======================================================
              LINHA MOBILE / TABLET
          ====================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-[5px]
              top-0
              w-px
              bg-white/10

              sm:left-[6px]

              md:left-[7px]

              lg:hidden
            "
          >
            <motion.div
              className="
                absolute
                left-0
                top-0
                w-[2px]
                bg-white
              "
              style={{
                height: "100%",
                scaleY: smoothProgress,
                transformOrigin: "top",
              }}
            />
          </div>

          {/* ======================================================
              ETAPAS
          ====================================================== */}

        <div className="relative">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <Reveal
                key={event.id}
                delay={index * 0.08}
                className={`
                  relative

                  ${
                    index !== events.length - 1
                      ? "mb-12 sm:mb-14 md:mb-16 lg:mb-24"
                      : ""
                  }
                `}
              >
                {/* ==================================================
                    MOBILE / TABLET
                    Mantém o layout atual
                ================================================== */}

                <div className="relative flex w-full lg:hidden">
                  <div
                    className="
                      relative
                      w-full
                      pl-8

                      sm:pl-10

                      md:pl-12
                    "
                  >
                    {/* PONTO MOBILE / TABLET */}

                    <div
                      className="
                        absolute
                        left-0
                        top-[3px]

                        h-3
                        w-3

                        rounded-full
                        border
                        border-white
                        bg-[rgb(0,0,24)]
                      "
                    />

                    {/* CONTEÚDO */}

                    <div className="group relative">
                      <span
                        className="
                          font-jakarta
                          text-[0.65rem]
                          font-medium
                          tracking-[0.2em]
                          text-primary/70

                          sm:text-[0.6875rem]
                          sm:tracking-[0.24em]
                        "
                      >
                        {event.date}
                      </span>

                      <h3
                        className="
                          mt-2
                          font-zodiak
                          text-[1.7rem]
                          font-bold
                          leading-[1.05]
                          tracking-[-0.5px]
                          text-white

                          sm:mt-3
                          sm:text-3xl

                          md:text-4xl
                        "
                      >
                        {event.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          max-w-[480px]
                          font-jakarta
                          text-[13px]
                          leading-[1.65]
                          text-white/50
                          transition-colors
                          duration-500
                          group-hover:text-white/70

                          sm:text-sm
                          sm:leading-relaxed

                          md:text-base
                        "
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    DESKTOP
                    CARDS INTERCALADOS NA LINHA CENTRAL
                ================================================== */}

                <div
                  className="
                    relative
                    hidden
                    min-h-[180px]
                    w-full
                    lg:grid
                    lg:grid-cols-2
                  "
                >
                  {/* ==================================================
                      CARD ESQUERDO
                  ================================================== */}

                  {isLeft && (
                    <div className="relative flex justify-end pr-16">
                      <div className="relative w-full max-w-[480px]">
                        {/* PONTO NA LINHA CENTRAL */}

                        <div
                          className="
                            absolute
                            -right-[70px]
                            top-[3px]
                            z-20

                            h-3
                            w-3

                            rounded-full
                            border
                            border-white
                            bg-[rgb(0,0,24)]
                          "
                        />

                        <div className="group">
                          <span
                            className="
                              font-jakarta
                              text-[0.6875rem]
                              font-medium
                              tracking-[0.24em]
                              text-primary/70
                            "
                          >
                            {event.date}
                          </span>

                          <h3
                            className="
                              mt-3
                              font-zodiak
                              text-4xl
                              font-bold
                              leading-[1.05]
                              tracking-[-0.5px]
                              text-white
                            "
                          >
                            {event.title}
                          </h3>

                          <p
                            className="
                              mt-3
                              max-w-sm
                              font-jakarta
                              text-base
                              leading-relaxed
                              text-white/50
                              transition-colors
                              duration-500
                              group-hover:text-white/70
                            "
                          >
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ==================================================
                      CARD DIREITO
                  ================================================== */}

                  {!isLeft && (
                    <div className="col-start-2 relative flex justify-start pl-16">
                      <div className="relative w-full max-w-[480px]">
                        {/* PONTO NA LINHA CENTRAL */}

                        <div
                          className="
                            absolute
                            -left-[70px]
                            top-[3px]
                            z-20

                            h-3
                            w-3

                            rounded-full
                            border
                            border-white
                            bg-[rgb(0,0,24)]
                          "
                        />

                        <div className="group">
                          <span
                            className="
                              font-jakarta
                              text-[0.6875rem]
                              font-medium
                              tracking-[0.24em]
                              text-primary/70
                            "
                          >
                            {event.date}
                          </span>

                          <h3
                            className="
                              mt-3
                              font-zodiak
                              text-4xl
                              font-bold
                              leading-[1.05]
                              tracking-[-0.5px]
                              text-white
                            "
                          >
                            {event.title}
                          </h3>

                          <p
                            className="
                              mt-3
                              max-w-sm
                              font-jakarta
                              text-base
                              leading-relaxed
                              text-white/50
                              transition-colors
                              duration-500
                              group-hover:text-white/70
                            "
                          >
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}