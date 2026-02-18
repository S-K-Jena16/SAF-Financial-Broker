import HeroSection from "../components/home/HeroSection";
import SectionTitle from "../components/common/SectionTitle";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        showCta={true}
        heroImage="/images/aboutus.jpg"
        fullViewport
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      {/* Chairman Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="" title="From the Chairman's Desk" />

          <motion.div
            className="mt-12 max-w-3xl mx-auto space-y-6 text-slate-600 text-lg"
            variants={fadeUp}
          >
            <p>
              In today's age of unprecedented economic complexity, we, as
              financial consulting experts, choose not to compromise on our
              commitment to excellence.
            </p>
            <p>
              At SAF, my team goes the extra mile to navigate financial
              landscapes. We redefine them for clients.
            </p>
            <p>
              Our approach goes beyond traditional consulting. Every strategy
              that we develop is rooted in comprehensive research.
            </p>
            <p className="font-semibold text-slate-900">Warm regards,</p>
            <p className="font-semibold text-slate-900">Chairman</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="font-display font-bold text-3xl mb-6">
                Who We Are?
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                At SAF, we stand as a strategic ally in achieving financial
                freedom, specializing in credit cards and personal loans.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
              variants={fadeUp}
            >
              <img
                src="/images/whoweare.jpg"
                alt="Who we are"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision, Mission, Commitment */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {[
            {
              title: "Vision",
              text: "To build robust financial foundations that enable confident financial journeys.",
              img: "/images/vision.jpg",
              reverse: false,
            },
            {
              title: "Mission",
              text: "To become a trusted financial management partner through innovative solutions.",
              img: "/images/mission.jpg",
              reverse: true,
            },
            {
              title: "Our Commitment",
              text: "We provide clarity, structure, and peace of mind for long-term financial success.",
              img: "/images/commitment.jpg",
              reverse: false,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                item.reverse ? "lg:flex-row-reverse" : ""
              }`}
              variants={fadeUp}
            >
              <div>
                <h2 className="font-display font-bold text-3xl mb-4">
                  {item.title}
                </h2>
                <p className="text-lg text-slate-700">{item.text}</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="py-16 sm:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Values"
            title="How we work"
            description="Integrity, excellence, and client-first focus."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Integrity", text: "Highest ethical standards" },
              { title: "Excellence", text: "Rigorous execution" },
              { title: "Partnership", text: "Client-first approach" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-slate-50 rounded-xl border hover:shadow-lg hover:scale-105 transition-transform duration-500"
                variants={fadeUp}
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
