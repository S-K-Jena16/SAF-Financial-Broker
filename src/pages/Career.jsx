import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import ApplyNow from "./ApplyNow";

const openings = [
  {
    id: 1,
    title: "Sales Agent For POS",
    department:
      "1 - 2 years U.A.E sales experience in selling Point of Sales (POS) machines.",
  },
  {
    id: 2,
    title: "Direct Sales Officer - Credit Cards, Loans",
    department:
      "1 - 2 years U.A.E sales experience in Retail Banking Products is a must.",
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Banner */}
      <section className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
        <img
          src="/images/career.jpg"
          alt="Career banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <nav className="text-sm text-white/90 mb-2">
            <Link to="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>{" "}
            <span className="mx-2 opacity-70">{">"}</span>
            <span className="font-medium">Career</span>
          </nav>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Your Career With Us
          </motion.h1>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Current Openings
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {openings.map((job, i) => (
              <motion.div
                key={job.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-slate-200 transition-transform transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Floating gold accent */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-amber-200/30 blur-2xl animate-pulse" />

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-900">
                  {job.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6">
                  {job.department}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedJob(job.title)}
                  className="px-6 py-2 bg-amber-500 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-600 transition-colors"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <ApplyNow jobTitle={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}
