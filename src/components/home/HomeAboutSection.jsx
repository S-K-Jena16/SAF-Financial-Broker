import { motion } from "framer-motion";

const FloatingShape = ({ className }) => (
  <div
    className={`absolute rounded-full bg-amber-300/20 animate-float-slow ${className}`}
  />
);

export default function HomeAboutSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background floating shapes */}
      <FloatingShape className="top-10 left-10 w-32 h-32" />
      <FloatingShape className="bottom-20 right-20 w-40 h-40" />
      <FloatingShape className="top-1/2 left-1/4 w-24 h-24" />
      <FloatingShape className="bottom-1/3 right-1/3 w-20 h-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Gradient Title */}
        <motion.h2
          className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Financial Management, Simplified
        </motion.h2>

        {/* Animated paragraphs */}
        <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At SAF, we don't just offer financial services but transform your
            financial future. As a leading direct sales agency specializing in
            credit card and personal loan solutions, we are more than just
            consultants—we are your strategic allies in achieving financial
            wellness. Our professionally trained experts navigate the complex
            world of finance with precision, bridging the gap between you and
            financial institutions by providing tailored strategies that turn
            financial challenges into opportunities.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our comprehensive, one-stop solution offers deep financial
            assessments, clear step-by-step guidance, and personalized
            approaches aligned with your goals. Whether personal loans, credit
            cards, or holistic financial guidance, SAF delivers transparent and
            structured analysis that simplifies financial management and creates
            lasting financial transformation.
          </motion.p>
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
