import { useParams, Link } from "react-router-dom";
import { getServiceById } from "../data/services";
import { motion } from "framer-motion";

const iconMap = {
  chart: "Chart",
  briefcase: "Briefcase",
  shield: "Shield",
  calculator: "Calculator",
  scale: "Scale",
  growth: "Growth",
};

const featureVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 80 },
  }),
};

export default function ServiceDetails() {
  const { id } = useParams();
  const service = getServiceById(id);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Link to="/services" className="text-amber-600">
          View all services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white">
            {service.title}
          </h1>

          <p className="text-white mt-4 max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>

        <p className="text-gray-700 mb-10">
          {service.description}
        </p>

        <h2 className="text-3xl font-bold mb-6">What we offer</h2>

        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              className="bg-gray-100 p-4 rounded"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={featureVariants}
            >
              {feature}
            </motion.li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-block mt-10 px-6 py-3 bg-amber-500 text-white rounded"
        >
          Discuss your needs
        </Link>
      </section>
    </>
  );
}