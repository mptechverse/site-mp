"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./originkit/ui/magnetic-hover-button";
import Image from "next/image";
import DirectionHover from "./originkit/ui/directionhover";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuFont = {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "-0.01em",
  };

  const transition = {
    type: "tween" as const,
    duration: 0.3,
    ease: "easeInOut" as const,
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        px-5
        py-5
        sm:px-8
        sm:py-6
        lg:px-[120px]
        transition-all
        duration-300
        ease-in-out
        ${
          scrolled
            ? "bg-blue/50 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="relative flex w-full items-center justify-between">

        {/* =====================================================
            MENU DESKTOP
        ====================================================== */}

        <div className="hidden items-center gap-6 text-white lg:flex">

          <a href="#solucoes">
            <DirectionHover
              title="SERVIÇOS"
              font={menuFont}
              gap={0}
              textColor="#ffffff"
              hoverColor="#0752cc"
              transition={transition}
            />
          </a>

          <a href="#diferenciais">
            <DirectionHover
              title="DIFERENCIAIS"
              font={menuFont}
              gap={0}
              textColor="#ffffff"
              hoverColor="#0752cc"
              transition={transition}
            />
          </a>

          <a href="#processo">
            <DirectionHover
              title="PROCESSO"
              font={menuFont}
              gap={0}
              textColor="#ffffff"
              hoverColor="#0752cc"
              transition={transition}
            />
          </a>

          <a href="#cta">
            <DirectionHover
              title="CONTATO"
              font={menuFont}
              gap={0}
              textColor="#ffffff"
              hoverColor="#0752cc"
              transition={transition}
            />
          </a>

        </div>

        {/* =====================================================
            LOGO
        ====================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <Image
            src="/img/logo.png"
            alt="MP Technologies"
            width={90}
            height={50}
            priority
            className="
              h-auto
              w-[70px]
              sm:w-[80px]
              lg:w-[90px]
            "
          />
        </div>

        {/* =====================================================
            BOTÃO DESKTOP
        ====================================================== */}

        <div className="hidden lg:block">
          <MagneticButton />
        </div>

        {/* =====================================================
            HAMBURGER MOBILE / TABLET
        ====================================================== */}

        <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              ml-auto
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-1.5
              rounded-full
              border
              border-white/20
              bg-black/10
              backdrop-blur-sm
              lg:hidden
            "
          >
            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-white
                transition-transform
                duration-300
                ${menuOpen ? "translate-y-[4px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-white
                transition-opacity
                duration-300
                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                block
                h-[1.5px]
                w-5
                bg-white
                transition-transform
                duration-300
                ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}
              `}
            />
        </button>

        {/* =====================================================
            MENU MOBILE / TABLET
        ====================================================== */}

        <div
          className={`
            absolute
            left-0
            right-0
            top-[calc(100%+12px)]
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/80
            backdrop-blur-xl
            transition-all
            duration-300
            lg:hidden
            ${
              menuOpen
                ? "pointer-events-auto max-h-[400px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }
          `}
        >
          <div className="flex flex-col p-5">

            <a
              href="#solucoes"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-medium tracking-wide text-white"
            >
              SERVIÇOS
            </a>

            <a
              href="#diferenciais"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-medium tracking-wide text-white"
            >
              DIFERENCIAIS
            </a>

            <a
              href="#processo"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm font-medium tracking-wide text-white"
            >
              PROCESSO
            </a>

            <a
              href="#cta"
              onClick={closeMenu}
              className="py-4 text-sm font-medium tracking-wide text-white"
            >
              CONTATO
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}