import { SpeedInsights } from "@vercel/speed-insights/react"
import AboutSection from "../components/section/AboutSection"
import CTASection from "../components/section/CTASection";
import HeroSection from "../components/section/HeroSection"
import PortfolioSection from "../components/section/PortfolioSection"
import ServicesSection from "../components/section/ServicesSection"
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default Home
