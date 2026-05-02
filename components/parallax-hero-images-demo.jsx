"use client";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";

export default function ParallaxHeroImagesDemo() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <ParallaxHeroImages images={images} />
      <div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
        <h1
          className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl dark:text-neutral-100 dark:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          State of the art, cutting edge images, everywhere.
        </h1>
        <p
          className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
          Somos una empresa dedicada al transporte profesional de pasajeros, con años de experiencia brindando soluciones de movilidad para empresas, instituciones, turismo y eventos.<br /><br />

Nuestro compromiso es ofrecer servicios confiables, seguros y adaptados a cada necesidad, combinando experiencia operativa, unidades confortables y atención personalizada.<br /><br />

Trabajamos con organizaciones y clientes que necesitan traslados eficientes y bien organizados, tanto para servicios programados como para operaciones especiales.
        </p>
      </div>
    </div>
  );
}

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];
