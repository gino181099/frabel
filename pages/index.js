import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import NavbarDemo from "@/components/resizable-navbar-demo";
import SignupFormDemo from "@/components/signup-form-demo";



export default function Home() {
  return (
    <main className="bg-olive-50">
      <NavbarDemo />      
      <AppleCardsCarouselDemo />   
      <SignupFormDemo />   
    </main>
  );
}
