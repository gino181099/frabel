"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import GlowingEffectDemo from "./glowing-effect-demo";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck } from 'lucide-react';

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Nosotros",
      link: "#nosotros",
    },
    {
      name: "Flota",
      link: "#flota",
    },
    {
      name: "Contacto",
      link: "#contacto",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            
            <NavbarButton variant="primary" href="#contacto">Contactar</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full" href="#contacto">
                Contactar
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />
      <h2
        className="max-w-7xl pl-4 pt-6 pb-20 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nuestros Servicios.
      </h2>
      <div className="max-w-7xl mx-auto px-6 pb-12"><GlowingEffectDemo /></div>
       
      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
      
      {/* 1. ANIMACIÓN DE ENTRADA (CORTINA BLANCA) */}
      {/* Esta capa cubre todo al inicio y se desvanece para revelar el video */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-0 bg-white z-50 pointer-events-none"
      />

      {/* 2. VIDEO DE FONDO */}
      <div className="absolute inset-0 z-0 ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[20%] brightness-[0.4] "
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay para asegurar legibilidad del texto (Matriz de Contraste) */}
        <div className="absolute inset-0 bg-black/40 " />
      </div>

      {/* 3. CONTENIDO (Z-INDEX SUPERIOR) */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Badge RT-2026 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-[10px] uppercase tracking-widest text-neutral-300 mb-8"
        >
          <ShieldCheck size={14} className="text-emerald-500" />
          Flota habilitada
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center max-w-4xl text-white"
        >
          <h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-8">
            Transporte de <span className="text-neutral-400">pasajeros</span> <br /> 
            en Mendoza.
          </h1>
          <p className="text-neutral-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Soluciones de traslado para empresas, instituciones y turismo.
            Puntualidad, seguridad y atención personalizada en cada viaje.
          </p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <a 
            href="#contacto"
            className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-all overflow-hidden shadow-2xl"
          >
            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Indicador de Estado RT-2026 (Esquina inferior) */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-1"
      >
        <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Estado Operativo</div>
        <div className="flex items-center gap-2 text-xs text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Flota Monitoreada (RT-2026)
        </div>
      </motion.div> */}
    </section>
      <section className="py-24" id="nosotros">
      <div className="max-w-7xl mx-auto" >
        <div className="grid md:grid-cols-2 gap-16 items-center pb-6">
          
          {/* Columna de Texto: Narrativa de Estatus */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <h2 className="max-w-7xl pt-6 pb-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
              Quienes somos.
              {/* <span className="text-neutral-500 italic">rigor analítico.</span> */}
            </h2>
            <div className="space-y-6 text-neutral-500 text-lg font-light leading-relaxed">
              <p>
                Somos una empresa familiar de Mendoza con años de experiencia en transporte de pasajeros. Entendemos que cada traslado implica responsabilidad, por eso trabajamos con foco en la puntualidad, la seguridad y el trato profesional.
              </p>
              <p>
                A lo largo del tiempo, ampliamos nuestros servicios para adaptarnos a las necesidades de empresas, instituciones y turismo, manteniendo siempre un estándar claro: cumplir lo que prometemos.                              
              </p>
            </div>
          </motion.div>

          
        </div>

        {/* Declaración de Compromiso 2026 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <ShieldCheck className="text-emerald-500" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-black">Garantía Operativa</h4>
              <p className="text-xs text-neutral-400">Unidades habilitadas según normativa vigente. Mantenimiento periódico de la flota. Conductores con experiencia</p>
            </div>
          </div>
          {/* <button className="text-xs font-bold border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            VER CERTIFICACIONES
          </button> */}
        </motion.div>
      </div>
    </section>
    </div>
  );
};
