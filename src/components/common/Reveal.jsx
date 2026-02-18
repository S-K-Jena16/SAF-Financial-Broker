import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children, variant }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
