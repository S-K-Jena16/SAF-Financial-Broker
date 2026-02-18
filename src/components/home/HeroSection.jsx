import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Get in Touch",
  ctaLink = "/contact",
  showCta = true,
  heroImage,
  fullScreenBanner = false,
  fullViewport = false,
}) {
  const isFullViewport = fullViewport;

  return (
    <section
      className={`relative bg-slate-900 text-white overflow-hidden flex items-center justify-center w-full ${
        isFullViewport
          ? "h-screen"
          : fullScreenBanner
            ? "min-h-[55vh] sm:min-h-[65vh] lg:min-h-[70vh]"
            : "min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]"
      }`}
    >
      {/* Background Image */}
      {heroImage && (
        <>
          <motion.img
            src={heroImage}
            alt=""
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.02, 1], x: [0, 6, 0], y: [0, 6, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
        </>
      )}

      {/* Floating abstract shapes */}
      <motion.div
        className="absolute w-44 h-44 bg-amber-400/20 rounded-full top-16 left-16"
        animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-36 h-36 bg-indigo-400/20 rounded-full bottom-24 right-12"
        animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="w-full flex flex-col items-center max-w-3xl">
          {/* Title: slide from left on load + subtle side-to-side floating */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: [0, -8, 0, 8, 0], opacity: 1 }}
            transition={{
              x: {
                type: "tween",
                ease: "easeInOut",
                duration: 12,
                repeat: Infinity,
              },
              opacity: { duration: 0.8 },
            }}
            className="font-display font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl mb-6 text-white"
          >
            {title}
          </motion.h1>

          {/* Subtitle: slide from right on load + subtle side-to-side floating */}
          {subtitle && (
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: [0, 6, 0, -6, 0], opacity: 1 }}
              transition={{
                x: {
                  type: "tween",
                  ease: "easeInOut",
                  duration: 12,
                  repeat: Infinity,
                },
                opacity: { duration: 0.8, delay: 0.2 },
              }}
              className="text-lg sm:text-xl mb-8 max-w-2xl text-slate-300 font-medium"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Buttons */}
          {showCta && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                to={ctaLink}
                className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg
                           hover:bg-yellow-500 hover:text-slate-900 hover:scale-105 transition-all duration-300"
              >
                {ctaText}
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg
                           hover:bg-yellow-500 hover:text-slate-900 hover:scale-105 transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
