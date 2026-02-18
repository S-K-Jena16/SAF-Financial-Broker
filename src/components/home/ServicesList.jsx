import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../services/ServiceCard";
import { services } from "../../data/services";

export default function ServicesList() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Our Services" title="OUR PROFICIENT SERVICES" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
