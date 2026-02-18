import HeroSection from "../components/home/HeroSection";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/services/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <HeroSection
        heroImage="/images/services.jpg"
        title="Our Services"
        subtitle="End-to-end financial advisory, from strategy and M&A to risk, tax, and valuation."
        showCta={false}
        fullScreenBanner
      />
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What We Offer"
            title="Comprehensive solutions for your business"
            description="We support corporates and investors with advisory, execution, and ongoing guidance."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
