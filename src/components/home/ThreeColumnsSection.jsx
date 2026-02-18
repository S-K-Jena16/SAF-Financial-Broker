import { motion } from "framer-motion";

const sections = [
  {
    heading: "Esteemed Brand",
    content:
      "We are where precision meets purpose. We believe in delivering excellence, every time. SAF, as a brand, truly embodies its core principles, i.e., reliability and ethics. No matter you look forward to addressing routine challenges or expanding ambitions, we have you covered. SAF is focused on crafting tailored solutions centered around your unique needs.",
  },
  {
    heading: "Exceptional Team",
    content:
      "The team at SAF is skilled to tackle your financial challenges. Our team meticulously pursues excellence in every offering, bridging companies with top-tier talent. The dedicated approach turns potential into performance and elevates operational capabilities, financial goals, and organizational output.",
  },
  {
    heading: "Eminent Services",
    content:
      "With unwavering commitment, we focus on providing premier services that transform client relationships through strategic solutions. Our philosophy is based on reliability, precision, and dedication, ensuring elevated financial potential and accelerated business growth.",
  },
];

const FloatingShape = ({ className }) => (
  <div
    className={`absolute rounded-full bg-amber-300/20 animate-float-slow ${className}`}
  />
);

export default function ThreeColumnsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Background floating shapes */}
      <FloatingShape className="top-10 left-10 w-32 h-32" />
      <FloatingShape className="bottom-20 right-20 w-40 h-40" />
      <FloatingShape className="top-1/2 left-1/4 w-24 h-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {sections.map(({ heading, content }, index) => (
            <motion.div
              key={heading}
              className="flex flex-col p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="font-display font-bold text-xl sm:text-2xl mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 group-hover:animate-pulse">
                {heading}
              </h2>
              <p className="text-slate-700 text-base leading-relaxed text-left">
                {content}
              </p>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-400/10 via-yellow-200/10 to-amber-400/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
