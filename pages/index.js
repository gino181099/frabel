// pages/index.js
import React from "react";
import Head from "next/head";
import { cn } from "../lib/utils";
import { Spotlight } from "../components/ui/Spotlight"; // Debés copiar el código del componente desde la web de Aceternity
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { ShieldCheck, Wine, Truck, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <Head>
        <title>Mendoza Luxury Logistics | Traslados de Alta Gama</title>
        <meta name="description" content="Servicios de transporte privado en Mendoza. Enoturismo y logística corporativa con trazabilidad digital." />
      </Head>

      {/* 1. HERO SECTION - Impacto Visual con Spotlight */}
      <section className="h-[45rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Logística de Distinción <br /> en Mendoza.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Traslados exclusivos a bodegas y soluciones ejecutivas. 
            Cumplimos con el Régimen de Trazabilidad 2026 para garantizar su seguridad y puntualidad.
          </p>
          <div className="flex justify-center mt-10">
             <a href="https://wa.me/tu_numero" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center gap-2">
               <MessageCircle size={20} /> Cotizar por WhatsApp
             </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICIOS - Bento Grid (Matriz de Eficiencia) */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-neutral-200">Unidades de Negocio</h2>
        <BentoGrid className="max-w-4xl mx-auto">
          <BentoGridItem
            title="Enoturismo Premium"
            description="Traslados privados a las bodegas más exclusivas de Maipú y Luján de Cuyo."
            header={<div className="h-full w-full bg-gradient-to-br from-purple-900/50 to-neutral-900 min-h-[10rem] rounded-xl" />}
            icon={<Wine className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Logística Corporativa"
            description="Transporte de personal para sectores estratégicos: Minería y Energía."
            header={<div className="h-full w-full bg-gradient-to-br from-neutral-800 to-black min-h-[10rem] rounded-xl" />}
            icon={<ShieldCheck className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="Punto Logístico Maipú"
            description="Centro de distribución y última milla para e-commerce desde Tropero Sosa."
            header={<div className="h-full w-full bg-gradient-to-br from-blue-900/30 to-black min-h-[10rem] rounded-xl" />}
            icon={<Truck className="h-4 w-4 text-neutral-500" />}
          />
        </BentoGrid>
      </section>

      {/* 3. FOOTER ESTRATÉGICO */}
      <footer className="border-t border-neutral-800 py-10 px-4 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
              Transporte Familiar - Mendoza
            </p>
            <p className="text-neutral-500 text-sm mt-2">Seguridad CNRT | Habilitación RNTAP 2026</p>
          </div>
          <div className="flex gap-8 text-neutral-400 text-sm">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Flota</a>
            <a href="#" className="hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}