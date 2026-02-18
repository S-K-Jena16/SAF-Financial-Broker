import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SectionTitle from "../common/SectionTitle";

// Floating shapes
const FloatingShape = ({ className }) => (
  <div
    className={`absolute rounded-full bg-amber-300/20 animate-float-slow ${className}`}
  />
);

// Floating icons for finance
const FloatingIcon = ({ icon, className }) => (
  <motion.div
    className={`absolute ${className} text-amber-400/70`}
    animate={{ y: ["0%", "10%", "0%"] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  >
    {icon}
  </motion.div>
);

export default function AboutPreview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-amber-50 to-white overflow-hidden">
      {/* Background floating shapes */}
      <FloatingShape className="top-10 left-10 w-32 h-32" />
      <FloatingShape className="bottom-20 right-20 w-40 h-40" />
      <FloatingShape className="top-1/2 left-1/4 w-24 h-24" />
      <FloatingShape className="bottom-1/3 right-1/3 w-20 h-20" />

      {/* Floating finance icons */}
      <FloatingIcon
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.105 0-2 .895-2 2s.895 2 2 2 2 .895 2 2-.895 2-2 2"
            />
          </svg>
        }
        className="top-1/4 left-1/3"
      />
      <FloatingIcon
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        }
        className="bottom-1/4 right-1/4"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <SectionTitle
              subtitle="About Us"
              title={
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 font-extrabold">
                  Trusted advisors for corporate finance and growth
                </span>
              }
              description="We partner with leading organizations to deliver strategic advisory, M&A, and capital solutions. Our team combines deep industry expertise with a client-first approach to drive lasting value."
              centered={false}
            />

            {/* Fade-in paragraph */}
            <motion.p
              className="mt-6 text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              With decades of combined experience across sectors and
              geographies, we help clients navigate complexity, seize
              opportunities, and achieve their strategic and financial goals.
            </motion.p>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
              >
                Learn more about us
                <svg
                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Image with tilt + parallax */}
          <div className="relative">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={4000}
              gyroscope={true}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <motion.div
                className="aspect-[4/3] w-full bg-slate-100 relative"
                style={{ perspective: 1000 }}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="/images/home.jpg"
                  alt="About"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </motion.div>
            </Tilt>

            {/* Soft gradient glow behind image */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-gradient-to-r from-amber-400/20 via-yellow-400/10 to-white -z-10 animate-float-slow" />
          </div>
        </div>
      </div>

      {/* Custom float animation */}
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
