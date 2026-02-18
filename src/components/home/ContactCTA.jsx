import { Link } from "react-router-dom";
import ctaImage from "../../assets/ctaimg.jpg";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${ctaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>

      {/* Animated content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-display text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ready to discuss your goals?
        </motion.h2>

        <motion.p
          className="text-slate-300 text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Get in touch with our team for a confidential conversation about your
          strategic and financial needs.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Golden Contact Button */}
          <Link
            to="/contact"
            className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg shadow-lg
                       hover:bg-yellow-500 hover:text-slate-900 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>

          {/* Golden Call Button */}
          <a
            href="tel:+971048854003"
            className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg shadow-lg
                       hover:bg-yellow-500 hover:text-slate-900 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
          >
            +971 (04) 885 4003
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle background zoom effect */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${ctaImage})`, zIndex: -1 }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
}
