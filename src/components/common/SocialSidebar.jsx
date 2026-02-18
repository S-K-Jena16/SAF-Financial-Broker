import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12a10 10 0 10-11.563 9.874v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.887h-2.33v6.987A10.002 10.002 0 0022 12z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
  href: "https://wa.me",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16.75 13.96c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.8.96-.15.17-.3.19-.56.06-.25-.13-1.07-.39-2.04-1.25-.75-.67-1.26-1.5-1.41-1.76-.15-.25-.02-.39.11-.52.11-.11.25-.28.38-.42.13-.14.17-.24.25-.39.08-.14.04-.27-.02-.39-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.91 2.43 1.04 2.59c.13.17 1.8 2.75 4.36 3.85.61.26 1.08.41 1.45.52.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.3z"/>
      <path d="M20.52 3.48A11.8 11.8 0 0012.01 0C5.37 0 .02 5.35.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.16-1.61A11.9 11.9 0 0012 24c6.64 0 12-5.35 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.82c-1.87 0-3.7-.5-5.31-1.45l-.38-.22-3.66.96.98-3.57-.24-.37A9.8 9.8 0 012.2 12C2.2 6.6 6.6 2.2 12 2.2c2.63 0 5.1 1.02 6.96 2.89A9.77 9.77 0 0121.8 12c0 5.4-4.4 9.82-9.8 9.82z"/>
    </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm9 2h-9A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-2.25a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    ),
  },
];

export default function UltraSocialSidebar() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const yOffset = useMotionValue(0);
  const floatY = useTransform(yOffset, [0, 1], [0, 10]);

  // Float Animation Up-Down
  useEffect(() => {
    let direction = 1;
    const interval = setInterval(() => {
      yOffset.set(yOffset.get() + 0.2 * direction);
      if (yOffset.get() > 5 || yOffset.get() < -5) direction *= -1;
    }, 30);
    return () => clearInterval(interval);
  }, [yOffset]);

  // Mouse Move Handler
  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.aside
      onMouseMove={handleMouseMove}
      className="hidden md:flex fixed right-3 top-1/2 -translate-y-1/2 z-50 flex-col rounded-xl overflow-hidden border border-amber-300/40 bg-white/30 backdrop-blur-lg shadow-lg p-2"
      style={{ y: floatY }}
    >
      {socials.map((s, i) => {
        // Mouse distance based attract
        const dx = mouse.x - (window.innerWidth - 50); // right sidebar approx X
        const dy = mouse.y - (i * 60 + window.innerHeight / 2 - 150); // Y per icon
        const dist = Math.sqrt(dx * dx + dy * dy);
        const scale = dist < 100 ? 1.5 : 1; // attract scale
        const rotate = dist < 100 ? (dx + dy) / 20 : 0; // small tilt

        return (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="h-14 w-14 flex items-center justify-center rounded-lg text-slate-700 hover:text-amber-600 cursor-pointer transition-colors"
            style={{
              scale,
              rotate,
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)", // Gold glow
            }}
            whileHover={{
              scale: 1.6,
              rotate: 0,
              boxShadow: "0 0 25px rgba(255, 215, 0, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {s.icon}
          </motion.a>
        );
      })}
    </motion.aside>
  );
}
