import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import Reveal from "../common/Reveal";
import { zoomIn } from "../../utils/animations";

/* ---------------- ICON MAP ---------------- */
const iconMap = {
  chart: (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
};

/* ---------------- FLOAT LOOP ---------------- */
const floatingAnimation = {
  y: [-6, 6, -6],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ---------------- COMPONENT ---------------- */
export default function ServiceCard({ service, compact = false }) {
  const icon = iconMap[service.icon] || iconMap.chart;
  const imageSrc = service.image || "/images/home.jpg";

  const cardRef = useRef(null);

  /* ⭐ 3D TILT HANDLER */
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    explain;
    if (!card) return;
    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <Reveal variant={zoomIn}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* FLOAT */}
        <motion.div animate={floatingAnimation}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="transition-transform duration-200"
          >
            <Link
              to={`/services/${service.id}`}
              className="group relative block rounded-3xl overflow-hidden"
            >
              {/* GOLD BORDER */}
              <div
                className="absolute inset-0 rounded-3xl p-[1.4px]
              bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600
              opacity-70 group-hover:opacity-100
              group-hover:shadow-[0_0_40px_rgba(251,191,36,0.7)]
              transition duration-500"
              />

              {/* ⭐ GLASS MORPH CARD */}
              <div
                className="relative rounded-3xl 
              bg-white/60 backdrop-blur-xl
              border border-white/40
              shadow-2xl overflow-hidden
              group-hover:bg-white/70
              transition duration-500"
              >
                {/* IMAGE */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={imageSrc}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  />

                  <div
                    className="absolute inset-0 
                  bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                  />
                </div>

                {/* CONTENT */}
                <div className={`${compact ? "p-6" : "p-8"}`}>
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="mb-6 inline-flex items-center justify-center 
                    w-14 h-14 rounded-2xl 
                    bg-gradient-to-br from-yellow-100 to-amber-200 
                    text-amber-700 shadow-md"
                  >
                    {icon}
                  </motion.div>

                  {/* HEADING */}
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className={`${compact ? "text-lg" : "text-xl"} 
                    font-semibold tracking-wide 
                    mb-3
                    bg-gradient-to-r from-slate-900 via-slate-800 to-amber-700
                    bg-clip-text text-transparent`}
                  >
                    {service.title}
                  </motion.h3>

                  {/* TEXT */}
                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    className="text-slate-700 text-sm sm:text-base leading-relaxed
                    font-light tracking-wide"
                  >
                    {service.shortDescription}
                  </motion.p>

                  {/* BUTTON */}
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-amber-600">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Reveal>
  );
}
