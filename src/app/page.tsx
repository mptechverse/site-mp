'use client'

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
const Hero11 = dynamic(() => import("@/components/originkit/hero-11"), { ssr: false });
import SectionUm from "@/components/secWorld";
import PorqueNos from "@/components/scrollPorqueNos";
import Passoapasso from "@/components/secPassos";
import FaqAccordion from "@/components/accordion";
import Footer from "@/components/footerr";
import Projetos from "@/components/secProjects";
import {Editorial} from "@/components/editorial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[rgb(0,0,24)] flex flex-col gap-7">

      <div className="relative z-10">

        <Navbar />

        <section id="inicio">
          <Hero11 />
        </section>

        <section id="world">
          <SectionUm />
        </section>

        <section id="solucoes">
          <Projetos/>
        </section>

        <section id="diferenciais">
          <PorqueNos/> 
        </section>

        <section id="processo">
          <Passoapasso/>
        </section>

        <section id="editorial">
          <Editorial/>
        </section>

        <section id="cta">
          <Cta/>
        </section>

        <section id="footer">
          <Footer />
        </section>

      </div>

    </main>
  );
}