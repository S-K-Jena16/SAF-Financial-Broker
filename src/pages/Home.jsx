import HeroSection from "../components/home/HeroSection";
import ThreeColumnsSection from "../components/home/ThreeColumnsSection";
import HomeAboutSection from "../components/home/HomeAboutSection";
import ServicesList from "../components/home/ServicesList";
import WhyChooseUsSection from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection
        heroImage="/images/home.jpg"
        fullViewport
        title="Expert Financial Solutions"
        subtitle="Unlock Your Financial Potential with Financial Broker"
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
      <ThreeColumnsSection />
      <HomeAboutSection />
      <ServicesList />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
