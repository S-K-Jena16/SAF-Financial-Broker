import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { whyChooseUs } from "../../data/whyChooseUs";

const iconMap = {
  team: (
    <svg
      className="w-10 h-10 text-amber-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  globe: (
    <svg
      className="w-10 h-10 text-amber-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  heart: (
    <svg
      className="w-10 h-10 text-amber-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  trophy: (
    <svg
      className="w-10 h-10 text-amber-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
};

const FloatingShape = ({ className }) => (
  <div
    className={`absolute rounded-full bg-amber-300/20 animate-float-slow ${className}`}
  />
);

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Floating background shapes */}
      <FloatingShape className="top-10 left-10 w-24 h-24" />
      <FloatingShape className="bottom-20 right-20 w-36 h-36" />
      <FloatingShape className="top-1/2 left-1/4 w-20 h-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Why Choose Us"
          title="What sets us apart"
          description="We combine expertise, integrity, and a relentless focus on client success."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex flex-col p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200 hover:border-amber-400/40 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: [-2, 2, -1, 1, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="mb-5">{iconMap[item.icon] || iconMap.team}</div>

              <h3 className="font-display font-bold text-slate-900 mb-3 text-xl text-center bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-amber-500 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed text-center">
                {item.description.split(" ").map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block hover:text-amber-500 transition-colors duration-300"
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-400/10 via-yellow-200/10 to-amber-400/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
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
            transform: translateY(-12px);
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
