import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import NavbarDemo from "@/components/resizable-navbar-demo";
import SignupFormDemo from "@/components/signup-form-demo";
import Head from "next/head";


export default function Home() {
  return (
<>
<Head>
  {/* Título: Máximo 60 caracteres. Incluye servicio + ciudad */}
  <title>Transporte Fra-Bel Viajes S.R.L. | Transporte de Pasajeros en Mendoza</title>
  
  {/* Descripción: Entre 140 y 160 caracteres. Debe invitar al clic */}
  <meta name="description" content="Servicios profesionales de transporte en Mendoza. Traslados a bodegas, excursiones, traslados al aeropuerto y logística para empresas. Calidad y seguridad en cada viaje." />
  
  {/* Keywords: Ya no pesan tanto para Google, pero ayudan a otros buscadores */}
  <meta name="keywords" content="transporte mendoza, traslados bodegas, turismo mendoza, alquiler de combis mendoza, traslados aeropuerto el plumerillo, transporte de pasajeros" />

  {/* Open Graph para que al enviar el link por WhatsApp o Facebook se vea profesional */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Transporte Fra-Bel Viajes S.R.L. | Transporte de Pasajeros en Mendoza" />
  <meta property="og:description" content="Servicios profesionales de transporte en Mendoza. Traslados a bodegas, excursiones, traslados al aeropuerto y logística para empresas. Calidad y seguridad en cada viaje." />
  <meta property="og:image" content="/1.jpg" /> {/* Crea una imagen de 1200x630px con tu logo y una van/paisaje */}
  <meta property="og:url" content="https://www.frabelviajes.com/" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Transporte de Pasajeros en Mendoza" />
  
  <link rel="canonical" href="https://www.frabelviajes.com/" />
</Head>
    <main className="bg-olive-50">
      <NavbarDemo />      
      <AppleCardsCarouselDemo />   
      <SignupFormDemo />   
    </main>
    </>
  );
}
