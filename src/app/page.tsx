'use client'

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
const Hero11 = dynamic(() => import("@/components/originkit/hero-11"), { ssr: false });
import SectionUm from "@/components/secWorld";
import PorqueNos from "@/components/scrollPorqueNos";
import Passoapasso from "@/components/secPassos";
import Footer from "@/components/footerr";
import Projetos from "@/components/secProjects";
import {Editorial} from "@/components/editorial";
import Cta from "@/components/cta";
import WhatsAppButton from "@/components/botãoWhatsapp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[rgb(0,0,24)] flex flex-col gap-7 ">

      <div className="relative z-10">

        <Navbar />

        <section id="inicio" className="overflow-x-hidden  overscroll-x-none">
          <Hero11 />
        </section>

        <section id="world" className="overflow-x-hidden  overscroll-x-none">
          <SectionUm />
        </section>

        <section id="solucoes" className="overflow-x-hidden  overscroll-x-none">
          <Projetos/>
        </section>

        <section id="diferenciais">
          <PorqueNos/> 
        </section>

        <section id="processo" className="overflow-x-hidden  overscroll-x-none">
          <Passoapasso/>
        </section>

        <section id="editorial " className="overflow-x-hidden  overscroll-x-none">
          <Editorial/>
        </section>

        <section id="cta" className="overflow-x-hidden  overscroll-x-none">
          <Cta/>
        </section>

        <section id="footer" className="overflow-x-hidden  overscroll-x-none">
          <Footer />
        </section>
        <WhatsAppButton />
      </div>

    </main>
  );
}