// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import { animate, scroll, spring } from "motion";
import { ReactLenis } from "lenis/react";

export default function HorizontalScroll(): JSX.Element {
  const ulRef = useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ============================================================
  // DETECTA CELULAR / TABLET
  // Até 1023px = layout vertical sem animação
  // ============================================================

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // ============================================================
  // ANIMAÇÃO
  // SOMENTE DESKTOP
  // ============================================================

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    // ==========================================================
    // CELULAR / TABLET
    // ==========================================================

    if (mediaQuery.matches) {
      const ul = ulRef.current;

      if (ul) {
        ul.style.transform = "none";
      }

      return;
    }

    // ==========================================================
    // DESKTOP
    // ==========================================================

    const ul = ulRef.current;

    if (!ul) return;

    const items = ul.querySelectorAll("li");
    const section = ul.closest("section");

    if (!section || items.length === 0) return;

    // ==========================================================
    // SCROLL HORIZONTAL
    // ==========================================================

    const controls = animate(
      ul,
      {
        transform: [
          "none",
          `translateX(-${items.length - 1}00vw)`,
        ],
      },
      {
        easing: spring(),
      }
    );

    const scrollControls = scroll(controls, {
      target: section,
    });

    // ==========================================================
    // ANIMAÇÃO DOS TÍTULOS
    // SOMENTE DESKTOP
    // ==========================================================

    const segmentLength = 1 / items.length;

    const titleAnimations: any[] = [];

    items.forEach((item, i) => {
      const header = item.querySelector("h2");

      if (!header) return;

      const animation = scroll(
        animate(header, {
          x: [800, -800],
        }),
        {
          target: section,
          offset: [
            [i * segmentLength, 1],
            [(i + 1) * segmentLength, 0],
          ],
        }
      );

      titleAnimations.push(animation);
    });

    // ==========================================================
    // CLEANUP
    // ==========================================================

    return () => {
      controls?.stop?.();
      scrollControls?.stop?.();

      titleAnimations.forEach((animation) => {
        animation?.stop?.();
      });

      if (ul) {
        ul.style.transform = "none";
      }

      items.forEach((item) => {
        const header = item.querySelector("h2");

        if (header) {
          (header as HTMLElement).style.transform = "none";
        }
      });
    };
  }, [isMobile]);

  return (
    <ReactLenis root>
      <main
        className="text-white"
        style={{
          fontFamily: "var(--font-jakarta)",
        }}
      >
        <article>

          {/* ======================================================
              HEADER
          ====================================================== */}

          <header
            className="
              relative
              grid
              place-content-start
              overflow-hidden

              bg-[rgb(0,0,24)]
              text-white
              overflow-x-hidden
              overscroll-x-none
              mx-5
              sm:mx-8
              md:mx-10
              lg:mx-[80px]
              xl:mx-[120px]
            "
          >
            <div className="absolute inset-0" />

            <div
              className="
                relative
                z-10

                pt-8
                sm:pt-10
                md:pt-12
                lg:pt-16
              "
            >

              {/* ==================================================
                  TÍTULO
              ================================================== */}

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
                Porque nos
                <br />
                <span>escolher?</span>
              </h1>

              {/* ==================================================
                  SUBTÍTULO
              ================================================== */}

              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                }}
                className="
                  mx-auto
                  lg:mx-0
                  mb-3
                  max-w-[480px]

                  text-sm
                  sm:text-base
                  md:text-lg

                  font-normal
                  leading-relaxed
                  tracking-wide

                  text-white/60

                  2xl:text-xl
                "
              >
                Experiências digitais para acompanhar
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                o crescimento do seu negócio
              </p>

            </div>
          </header>

          {/* ======================================================
              CARDS

              DESKTOP:
              Scroll horizontal

              CELULAR / TABLET:
              Scroll vertical
          ====================================================== */}

          <section
            className={`
              relative
              overscroll-x-none
              bg-[rgb(0,0,24)]

              ${
                isMobile
                  ? "h-auto"
                  : "h-[400vh]"
              }
            `}
          >

            <ul
              ref={ulRef}
              className={`
                ${
                  isMobile
                    ? "relative flex flex-col"
                    : "sticky top-0 flex h-screen"
                }
              `}
            >

              {/* ==================================================
                  01 — DESIGN + TECNOLOGIA
              ================================================== */}

              <li
                className="
                  relative
                  flex

                  w-full
                  shrink-0

                  items-center
                  justify-center

                  overflow-hidden

                  bg-[rgb(0,0,24)]

                  border-t-[0.5px]
                  border-white/10

                  min-h-[45vh]
                  py-10

                  sm:min-h-[50vh]
                  sm:py-12

                  md:min-h-[52vh]
                  md:py-14

                  lg:h-screen
                  lg:min-h-0
                  lg:w-screen
                  lg:border-t-0
                  lg:py-0
                "
              >

                {/* BACKGROUND */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none

                    bg-[radial-gradient(circle_at_center,rgba(7,82,204,0.22),transparent_35%)]
                  "
                />

                {/* CONTEÚDO */}

                <div
                  className="
                    relative
                    z-10

                    w-full
                    max-w-[900px]

                    mx-auto

                    px-6
                    sm:px-8
                    md:px-10
                    lg:px-10
                    2xl:px-20

                    text-left
                  "
                >

                  <h2
                    style={{
                      fontFamily: "var(--font-zodiak)",
                    }}
                    className="
                      max-w-[900px]

                      text-[13vw]
                      sm:text-[10vw]
                      md:text-[8vw]
                      lg:text-[7vw]

                      font-bold
                      leading-[0.9]
                      tracking-[-0.06em]

                      text-[rgb(212,216,223)]
                    "
                  >
                    DESIGN +
                    <br />
                    TECNOLOGIA
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                    }}
                    className="
                      mt-5
                      sm:mt-6
                      md:mt-7
                      lg:mt-8

                      max-w-[480px]

                      text-left

                      text-sm
                      sm:text-base
                      md:text-lg
                      lg:text-lg

                      font-normal
                      leading-relaxed
                      tracking-wide

                      text-white/60

                      2xl:text-xl
                    "
                  >
                    Criamos experiências digitais que unem design,
                    tecnologia e performance para transformar ideias
                    em resultados.
                  </p>

                </div>

                {/* CONTADOR */}

                <div
                  className="
                    absolute

                    bottom-5
                    left-6

                    sm:bottom-6
                    sm:left-8

                    md:bottom-8
                    md:left-10

                    z-30

                    text-[10px]
                    sm:text-xs
                    md:text-sm

                    uppercase
                    tracking-[0.2em]
                    sm:tracking-[0.25em]

                    text-white/50
                  "
                >
                  01 / 04
                </div>

              </li>


              {/* ==================================================
                  02 — EXPERIÊNCIA
              ================================================== */}

              <li
                className="
                  relative
                  flex

                  w-full
                  shrink-0

                  items-center
                  justify-center

                  overflow-hidden

                  bg-[rgb(0,0,24)]

                  border-t-[0.5px]
                  border-white/10

                  min-h-[45vh]
                  py-10

                  sm:min-h-[50vh]
                  sm:py-12

                  md:min-h-[52vh]
                  md:py-14

                  lg:h-screen
                  lg:min-h-0
                  lg:w-screen
                  lg:border-t-0
                  lg:py-0
                "
              >

                {/* BACKGROUND */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none

                    bg-[radial-gradient(circle_at_center,rgba(7,82,204,0.22),transparent_35%)]
                  "
                />

                {/* CONTEÚDO */}

                <div
                  className="
                    relative
                    z-10

                    w-full
                    max-w-[900px]

                    mx-auto

                    px-6
                    sm:px-8
                    md:px-10
                    lg:px-10
                    2xl:px-20

                    text-left
                  "
                >

                  <h2
                    style={{
                      fontFamily: "var(--font-zodiak)",
                    }}
                    className="
                      max-w-[900px]

                      text-[13vw]
                      sm:text-[10vw]
                      md:text-[8vw]
                      lg:text-[7vw]

                      font-bold
                      leading-[0.9]
                      tracking-[-0.06em]

                      text-[rgb(212,216,223)]
                    "
                  >
                    EXPERIÊNCIA
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                    }}
                    className="
                      mt-5
                      sm:mt-6
                      md:mt-7
                      lg:mt-8

                      max-w-[480px]

                      text-left

                      text-sm
                      sm:text-base
                      md:text-lg
                      lg:text-lg

                      font-normal
                      leading-relaxed
                      tracking-wide

                      text-white/60

                      2xl:text-xl
                    "
                  >
                    Desenvolvemos experiências digitais intuitivas,
                    modernas e memoráveis, pensadas para conectar
                    pessoas e marcas.
                  </p>

                </div>

                {/* CONTADOR */}

                <div
                  className="
                    absolute

                    bottom-5
                    left-6

                    sm:bottom-6
                    sm:left-8

                    md:bottom-8
                    md:left-10

                    z-30

                    text-[10px]
                    sm:text-xs
                    md:text-sm

                    uppercase
                    tracking-[0.2em]

                    text-white/50
                  "
                >
                  02 / 04
                </div>

              </li>


              {/* ==================================================
                  03 — PERFORMANCE
              ================================================== */}

              <li
                className="
                  relative
                  flex

                  w-full
                  shrink-0

                  items-center
                  justify-center

                  overflow-hidden

                  bg-[rgb(0,0,24)]

                  border-t-[0.5px]
                  border-white/10

                  min-h-[45vh]
                  py-10

                  sm:min-h-[50vh]
                  sm:py-12

                  md:min-h-[52vh]
                  md:py-14

                  lg:h-screen
                  lg:min-h-0
                  lg:w-screen
                  lg:border-t-0
                  lg:py-0
                "
              >

                {/* BACKGROUND */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none

                    bg-[radial-gradient(circle_at_center,rgba(7,82,204,0.22),transparent_35%)]
                  "
                />

                {/* CONTEÚDO */}

                <div
                  className="
                    relative
                    z-10

                    w-full
                    max-w-[900px]

                    mx-auto

                    px-6
                    sm:px-8
                    md:px-10
                    lg:px-10
                    2xl:px-20

                    text-left
                  "
                >

                  <h2
                    style={{
                      fontFamily: "var(--font-zodiak)",
                    }}
                    className="
                      max-w-[900px]

                      text-[13vw]
                      sm:text-[10vw]
                      md:text-[8vw]
                      lg:text-[7vw]

                      font-bold
                      leading-[0.9]
                      tracking-[-0.06em]

                      text-[rgb(212,216,223)]
                    "
                  >
                    PERFORMANCE
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                    }}
                    className="
                      mt-5
                      sm:mt-6
                      md:mt-7
                      lg:mt-8

                      max-w-[480px]

                      text-left

                      text-sm
                      sm:text-base
                      md:text-lg
                      lg:text-lg

                      font-normal
                      leading-relaxed
                      tracking-wide

                      text-white/60

                      2xl:text-xl
                    "
                  >
                    Código otimizado, carregamento rápido e
                    experiências fluidas para entregar o melhor
                    desempenho em qualquer dispositivo.
                  </p>

                </div>

                {/* CONTADOR */}

                <div
                  className="
                    absolute

                    bottom-5
                    left-6

                    sm:bottom-6
                    sm:left-8

                    md:bottom-8
                    md:left-10

                    z-30

                    text-[10px]
                    sm:text-xs
                    md:text-sm

                    uppercase
                    tracking-[0.2em]

                    text-white/50
                  "
                >
                  03 / 04
                </div>

              </li>


              {/* ==================================================
                  04 — ESCALABILIDADE
              ================================================== */}

              <li
                className="
                  relative
                  flex

                  w-full
                  shrink-0

                  items-center
                  justify-center

                  overflow-hidden

                  bg-[rgb(0,0,24)]

                  border-t-[0.5px]
                  border-white/10

                  min-h-[45vh]
                  py-10

                  sm:min-h-[50vh]
                  sm:py-12

                  md:min-h-[52vh]
                  md:py-14

                  lg:h-screen
                  lg:min-h-0
                  lg:w-screen
                  lg:border-t-0
                  lg:py-0
                "
              >

                {/* BACKGROUND */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none

                    bg-[radial-gradient(circle_at_center,rgba(7,82,204,0.22),transparent_35%)]
                  "
                />

                {/* CONTEÚDO */}

                <div
                  className="
                    relative
                    z-10

                    w-full
                    max-w-[900px]

                    mx-auto

                    px-6
                    sm:px-8
                    md:px-10
                    lg:px-10
                    2xl:px-20

                    text-left
                  "
                >

                  <h2
                    style={{
                      fontFamily: "var(--font-zodiak)",
                    }}
                    className="
                      max-w-[900px]

                      text-[12.5vw]
                      sm:text-[10vw]
                      md:text-[8vw]
                      lg:text-[7vw]

                      font-bold
                      leading-[0.9]
                      tracking-[-0.06em]

                      text-[rgb(212,216,223)]
                    "
                  >
                    ESCALABILIDADE
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                    }}
                    className="
                      mt-5
                      sm:mt-6
                      md:mt-7
                      lg:mt-8

                      max-w-[480px]

                      text-left

                      text-sm
                      sm:text-base
                      md:text-lg
                      lg:text-lg

                      font-normal
                      leading-relaxed
                      tracking-wide

                      text-white/60

                      2xl:text-xl
                    "
                  >
                    Construímos soluções preparadas para crescer
                    junto com o seu negócio, sem comprometer
                    qualidade, estabilidade ou performance.
                  </p>

                </div>

                {/* CONTADOR */}

                <div
                  className="
                    absolute

                    bottom-5
                    left-6

                    sm:bottom-6
                    sm:left-8

                    md:bottom-8
                    md:left-10

                    z-30

                    text-[10px]
                    sm:text-xs
                    md:text-sm

                    uppercase
                    tracking-[0.2em]

                    text-white/50
                  "
                >
                  04 / 04
                </div>

              </li>

            </ul>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}