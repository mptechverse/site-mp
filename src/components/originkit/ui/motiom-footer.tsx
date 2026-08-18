"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MagneticButton from "./magnetic-hover-button";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/* STYLES                                                                      */
/* -------------------------------------------------------------------------- */

const STYLES = `
  .cinematic-footer {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .footer-aurora {
    background:
      radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.12) 0%,
        rgba(255, 255, 255, 0.045) 35%,
        transparent 70%
      );
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }

  .footer-bg-grid {
    background-size: 60px 60px;

    background-image:
      linear-gradient(
        to right,
        rgba(255, 255, 255, 0.045) 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.045) 1px,
        transparent 1px
      );

    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 25%,
      black 75%,
      transparent
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      black 25%,
      black 75%,
      transparent
    );
  }

  .footer-giant-bg-text {
    font-size: 30vw;
    line-height: 0.75;
    font-weight: 900;
    letter-spacing: -0.08em;

    color: transparent;

    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 65%
    );

    -webkit-background-clip: text;
    background-clip: text;

    user-select: none;
    pointer-events: none;
  }

  .footer-title {
    color: #fff;

    text-shadow:
      0 0 30px rgba(255, 255, 255, 0.08),
      0 0 80px rgba(255, 255, 255, 0.04);
  }

  .footer-glass-pill {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 10px 30px rgba(0, 0, 0, 0.25);

    transition:
      background-color 300ms ease,
      border-color 300ms ease,
      box-shadow 300ms ease,
      color 300ms ease;
  }

  .footer-glass-pill:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.22);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.12),
      0 15px 40px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    .footer-giant-bg-text {
      font-size: 42vw;
    }

    .footer-bg-grid {
      background-size: 45px 45px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cinematic-footer *,
    .cinematic-footer *::before,
    .cinematic-footer *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/* MARQUEE                                                                     */
/* -------------------------------------------------------------------------- */

function MarqueeItem() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      <span>MP TECHNOLOGIES</span>

      <span className="text-white/30">•</span>

      <span>ESTRATÉGIA</span>

      <span className="text-white/30">•</span>

      <span>DESIGN</span>

      <span className="text-white/30">•</span>

      <span>DESENVOLVIMENTO</span>

      <span className="text-white/30">•</span>

      <span>TECNOLOGIA</span>

      <span className="text-white/30">•</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FOOTER                                                                      */
/* -------------------------------------------------------------------------- */

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const footer = footerRef.current;

    if (!wrapper || !footer) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(footer, {
          yPercent: 0,
          opacity: 1,
        });

        return;
      }

      gsap.fromTo(
        footer,
        {
          yPercent: 15,
          opacity: 0.3,
        },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",

          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "top top",
            scrub: 1,

            invalidateOnRefresh: true,

            // Evita cálculos desnecessários
            fastScrollEnd: true,
          },
        }
      );
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: STYLES,
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* WRAPPER                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div
        ref={wrapperRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* ---------------------------------------------------------------- */}
        {/* FOOTER                                                           */}
        {/* ---------------------------------------------------------------- */}

        <footer
          ref={footerRef}
          className="cinematic-footer fixed inset-x-0 bottom-0 z-10 flex h-screen w-full flex-col justify-between overflow-hidden bg-black text-white"
        >
          {/* ---------------------------------------------------------------- */}
          {/* BACKGROUND                                                       */}
          {/* ---------------------------------------------------------------- */}

          <div
            aria-hidden="true"
            className="footer-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[55vh] w-[80vw] rounded-full"
          />

          <div
            aria-hidden="true"
            className="footer-bg-grid pointer-events-none absolute inset-0 z-0"
          />

          {/* ---------------------------------------------------------------- */}
          {/* GIANT TEXT                                                       */}
          {/* ---------------------------------------------------------------- */}

          <div className="footer-giant-bg-text absolute bottom-[-4vh] left-1/2 z-0 -translate-x-1/2 whitespace-nowrap">
            MP TECH
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* MARQUEE                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="absolute left-0 top-10 z-20 w-full -rotate-2 scale-110 overflow-hidden border-y border-white/10 bg-black/70 py-4 shadow-2xl">
            <div
              aria-hidden="true"
              className="flex w-max text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 md:text-sm"
            >
              <MarqueeItem />
              <MarqueeItem />
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* MAIN CONTENT                                                     */}
          {/* ---------------------------------------------------------------- */}

          <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-20 text-center md:px-12">
            {/* Eyebrow */}

            <span className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-white/40 md:text-xs">
              Próximo passo
            </span>

            {/* Title */}

            <h2 className="footer-title max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl">
              Tem uma ideia?
              <br />

              <span className="text-white/55">
                Vamos transformá-la em produto.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/50 md:mt-8 md:text-base">
              Conte-nos o que você está construindo. Vamos transformar sua
              ideia em uma solução digital pensada para gerar resultados.
            </p>

            {/* CTA */}

            <div className="mt-9 md:mt-10">
              <MagneticButton
                label="COMEÇAR UM PROJETO"
                link="#contato"
                newTab={false}
                font={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: "1em",
                  letterSpacing: "0.08em",
                }}
                fill="#FFFFFF"
                textColor="#050505"
                sweepColor="#0752cc"
                sweepTextColor="#FFFFFF"
                paddingX={40}
                paddingY={20}
                radius={999}
                magnet={5}
                transition={{
                  type: "tween",
                  stiffness: 800,
                  damping: 60,
                  mass: 1,
                  ease: "easeInOut",
                  duration: 0.3,
                }}
                style={{
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* Supporting text */}

            <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-white/25 md:text-[10px]">
              Estratégia • Design • Desenvolvimento
            </p>
          </main>

          {/* ---------------------------------------------------------------- */}
          {/* BOTTOM BAR                                                       */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 px-6 pb-7 pt-5 md:flex-row md:px-12">
            {/* Copyright */}

            <div className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/30 md:text-xs">
              © 2026 MP Technologies
            </div>

            {/* Services */}

            <div className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-white/30 md:text-xs">
              <span>Estratégia</span>

              <span className="text-white/15">•</span>

              <span>Design</span>

              <span className="text-white/15">•</span>

              <span>Desenvolvimento</span>
            </div>

            {/* Back to top */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="footer-glass-pill group flex h-11 w-11 items-center justify-center rounded-full text-white/50 hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

