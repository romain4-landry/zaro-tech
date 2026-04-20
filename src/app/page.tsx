import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Offices from "@/components/sections/Offices";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Offices />
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}