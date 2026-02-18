import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonials";
import { motion } from "framer-motion";

const FloatingShape = ({ className }) => (
  <div
    className={`absolute rounded-full bg-amber-300/20 animate-float-slow ${className}`}
  />
);

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Background floating shapes */}
      <FloatingShape className="top-10 left-10 w-32 h-32" />
      <FloatingShape className="bottom-20 right-20 w-40 h-40" />
      <FloatingShape className="top-1/2 left-1/4 w-24 h-24" />
      <FloatingShape className="bottom-1/3 right-1/3 w-20 h-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Testimonials"
          title="What our clients say"
          description="Trusted by leading organizations across industries."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.blockquote
              key={t.id}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Gradient top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-t-xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

              <p className="text-slate-700 italic mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400 text-white font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <cite className="font-semibold text-slate-900 not-italic">
                    {t.author}
                  </cite>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </footer>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-400/10 via-yellow-200/10 to-amber-400/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            </motion.blockquote>
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
