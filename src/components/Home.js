import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import RecruitingCountries from "./RecruitingCountries";
import MessagesSlider from "./message";
import { Link } from "react-router-dom";

const Highlights = () => {
  const items = [
    { icon: "✅", title: "Govt. Licensed", text: "Ministry of Labour Approved License No. 878/067/68" },
    { icon: "🧭", title: "12+ Years", text: "Experience placing talent in global markets" },
    { icon: "🤝", title: "End‑to‑End Support", text: "Screening, visa, medical, and orientation" },
    { icon: "🌍", title: "Global Reach", text: "Saudi Arabia, Malaysia, Kuwait, Dubai, Qatar, Oman, Japan" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-md"
            >
              <div className="text-3xl mb-2">{i.icon}</div>
              <h4 className="font-semibold text-gray-800">{i.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{i.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutTeaser = () => (
  <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Rising Recruitment</h2>
        <p className="text-gray-600 leading-relaxed">
          We are a Nepal Government licensed recruitment company connecting Nepalese talent
          with reputed employers across the globe. Our core values are integrity and transparency,
          and we provide end‑to‑end support from candidate screening to deployment.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/company-profile" className="btn-primary">Read Company Profile</Link>
          <Link to="/application-form" className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50">
            Apply Now
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          {["Executive Search", "HR Support", "Recruitment Campaigns", "Manpower Outsourcing"].map((s) => (
            <div key={s} className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 font-medium">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 text-center"
      >
        <h3 className="text-3xl font-bold mb-3">Ready to Work Abroad?</h3>
        <p className="opacity-90 mb-6">Submit your application and our team will guide you end to end.</p>
        <Link to="/application-form" className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg inline-block hover:bg-gray-100">
          Fill Application Form
        </Link>
      </motion.div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Highlights />
      <RecruitingCountries />
      <AboutTeaser />
      <CTA />
      <MessagesSlider />
    </div>
  );
};

export default Home;


