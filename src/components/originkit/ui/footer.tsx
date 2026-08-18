"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footerdemo() {
  return (
    <footer
      className="
        relative
        w-full
        bg-transparent
        text-white
        transition-colors
        duration-300

        px-5
        sm:px-8
        md:px-10
        lg:px-[100px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-0
          py-12

          sm:py-14
          md:py-16
          lg:py-20
        "
      >

        {/* =====================================================
            CONTEÚDO PRINCIPAL
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:gap-12

            md:grid-cols-2
            md:gap-x-12
            md:gap-y-14

            lg:grid-cols-4
            lg:gap-12
            xl:gap-16
          "
        >

          {/* =================================================
              MARCA
          ================================================== */}

          <div className="relative">

            <Image
              src="/img/logoHorizontal.webp"
              alt="MP Technologies"
              width={290}
              height={70}
              priority
              className="
                mb-4
                h-auto
                w-[210px]

                sm:w-[230px]
                md:w-[240px]
                lg:w-[250px]
                xl:w-[270px]
              "
            />

            <p
              style={{
                fontFamily: "var(--font-jakarta)",
              }}
              className="
                mb-6
                max-w-[320px]
                text-[13px]
                leading-relaxed
                text-white/50

                sm:text-sm
              "
            >
              Transformamos ideias em experiências digitais que
              geram valor para o seu negócio.
            </p>

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-4
                top-0
                h-20
                w-20
                rounded-full
                bg-primary/10
                blur-2xl

                sm:h-24
                sm:w-24
              "
            />

          </div>


          {/* =================================================
              EXPLORAR
          ================================================== */}

          <div>

            <h3
              style={{
                fontFamily: "var(--font-zodiak)",
              }}
              className="
                mb-4
                text-base
                font-bold
                tracking-tight

                sm:mb-5
                sm:text-lg
              "
            >
              EXPLORAR
            </h3>

            <nav
              style={{
                fontFamily: "var(--font-jakarta)",
              }}
              className="
                space-y-3
                text-[13px]

                sm:text-sm
              "
            >

              <a
                href="#inicio"
                className="
                  block
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Início
              </a>

              <a
                href="#solucoes"
                className="
                  block
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Serviços
              </a>

              <a
                href="#sobre"
                className="
                  block
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Sobre nós
              </a>

              <a
                href="#processo"
                className="
                  block
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Processo
              </a>

              <a
                href="#contato"
                className="
                  block
                  text-white/50
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Contato
              </a>

            </nav>

          </div>


          {/* =================================================
              VAMOS CONVERSAR
          ================================================== */}

          <div>

            <h3
              style={{
                fontFamily: "var(--font-zodiak)",
              }}
              className="
                mb-4
                text-base
                font-bold
                tracking-tight

                sm:mb-5
                sm:text-lg
              "
            >
              VAMOS CONVERSAR
            </h3>

            <div
              style={{
                fontFamily: "var(--font-jakarta)",
              }}
              className="
                max-w-[300px]
                space-y-3
                text-[13px]
                leading-relaxed

                sm:text-sm
              "
            >

              <p className="text-white/70">
                Tem um projeto em mente?
              </p>

              <p className="text-white/50">
                Conte-nos sobre sua ideia e vamos encontrar a
                melhor solução para transformá-la em realidade.
              </p>

            </div>

          </div>


          {/* =================================================
              CONTATO
          ================================================== */}

          <div className="relative">

            <h3
              style={{
                fontFamily: "var(--font-zodiak)",
              }}
              className="
                mb-4
                text-base
                font-bold
                tracking-tight

                sm:mb-5
                sm:text-lg
              "
            >
              CONTATO
            </h3>

            <div
              style={{
                fontFamily: "var(--font-jakarta)",
              }}
              className="
                mb-6
                space-y-2
                text-[13px]

                sm:text-sm
              "
            >

              <p className="text-white/50">
                WhatsApp: (83) 99988-3708
              </p>

              <p className="break-words text-white/50">
                Email: mptechverse@gmail.com
              </p>

            </div>


            {/* =================================================
                REDES SOCIAIS
            ================================================== */}

            <div className="flex gap-3">

              {/* Instagram */}

              {/* Instagram */}

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger
      type="button"
      className="
        inline-flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-transparent
        text-white/60
        transition-all
        duration-300
        hover:border-white/30
        hover:bg-white/5
        hover:text-white
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/30
        sm:h-10
        sm:w-10
      "
      onClick={() => {
        window.open(
          "https://instagram.com/mptech.br",
          "_blank",
          "noopener,noreferrer"
        );
      }}
    >
      <FaInstagram className="h-4 w-4" />

      <span className="sr-only">
        Instagram
      </span>
    </TooltipTrigger>

    <TooltipContent>
      <p
        style={{
          fontFamily: "var(--font-jakarta)",
        }}
      >
        Conecte-se conosco no Instagram
      </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>


              {/* LinkedIn */}

             <TooltipProvider>
  <Tooltip>

    <TooltipTrigger
      type="button"
      className="
        inline-flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center

        rounded-full
        border
        border-white/10

        bg-transparent
        text-white/60

        transition-all
        duration-300

        hover:border-white/30
        hover:bg-white/5
        hover:text-white

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/30

        sm:h-10
        sm:w-10
      "
    >
      <FaLinkedinIn className="h-4 w-4" />

      <span className="sr-only">
        LinkedIn
      </span>
    </TooltipTrigger>

    <TooltipContent>
      <p
        style={{
          fontFamily: "var(--font-jakarta)",
        }}
      >
        Conecte-se conosco no LinkedIn
      </p>
    </TooltipContent>

  </Tooltip>
</TooltipProvider>

            </div>

          </div>

        </div>


        {/* =====================================================
            RODAPÉ INFERIOR
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-white/10
            pt-6
            text-center

            sm:mt-12
            sm:pt-8

            md:flex-row
            md:text-left
          "
        >

          <p
            style={{
              fontFamily: "var(--font-jakarta)",
            }}
            className="
              text-[11px]
              text-white/40

              sm:text-xs
              md:text-sm
            "
          >
            © 2026 MP Technologies. Todos os direitos reservados.
          </p>

          <p
            style={{
              fontFamily: "var(--font-jakarta)",
            }}
            className="
              text-[11px]
              text-white/40

              sm:text-xs
              md:text-sm
            "
          >
            Desenvolvido pela MP Technologies.
          </p>

        </div>

      </div>
    </footer>
  );
}

export { Footerdemo };