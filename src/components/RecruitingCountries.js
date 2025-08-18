import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import countries from "../data";
import { Link } from "react-router-dom";

const RecruitingCountries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const countryInfo = {
    "Saudi Arabia": {
      description: "Robust economy with world‑class projects and tax‑free income",
      opportunities: ["Oil & Gas", "Construction", "Healthcare", "Logistics"],
      color: "from-yellow-500 to-amber-600"
    },
    "Kuwait": {
      description: "Growing economy with excellent benefits and tax-free income",
      opportunities: ["Oil & Gas", "Construction", "Healthcare", "Education"],
      color: "from-green-500 to-green-600"
    },
    "Dubai": {
      description: "Modern city with world-class infrastructure and international exposure",
      opportunities: ["Tourism", "Real Estate", "Finance", "Technology"],
      color: "from-purple-500 to-purple-600"
    },
    "Malaysia": {
      description: "Diversified industry base with strong manufacturing and services",
      opportunities: ["Manufacturing", "Hospitality", "IT", "Healthcare"],
      color: "from-blue-500 to-cyan-600"
    },
    "Qatar": {
      description: "High‑growth market with mega infrastructure and energy projects",
      opportunities: ["Construction", "Oil & Gas", "Facility Management", "Security"],
      color: "from-red-500 to-rose-600"
    },
    "Oman": {
      description: "Stable market with strong demand in services and infrastructure",
      opportunities: ["Hospitality", "Construction", "Retail", "Healthcare"],
      color: "from-emerald-500 to-teal-600"
    },
    "Japan": {
      description: "Advanced economy seeking skilled workers across sectors",
      opportunities: ["Caregiving", "Manufacturing", "IT", "Engineering"],
      color: "from-slate-600 to-blue-700"
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Recruiting Countries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We connect talented professionals with opportunities in leading global markets. 
            Our extensive network spans across multiple countries, offering diverse career paths.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Global Opportunities Await
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our recruitment services extend to major international markets, providing 
                professionals with access to world-class opportunities. We ensure seamless 
                placement processes and comprehensive support throughout the journey.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: "🌍",
                  title: "Global Network",
                  description: "Established partnerships with leading companies worldwide"
                },
                {
                  icon: "📋",
                  title: "Visa Support",
                  description: "Comprehensive visa and work permit assistance"
                },
                {
                  icon: "🏠",
                  title: "Relocation Services",
                  description: "Full support for smooth transition and settlement"
                },
                {
                  icon: "📚",
                  title: "Cultural Training",
                  description: "Pre-departure orientation and cultural preparation"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Countries Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Country Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Country Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {country.name}
                    </h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${countryInfo[country.name]?.color || 'from-blue-500 to-purple-600'} rounded-full`} />
                  </div>
                </div>

                {/* Country Info */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {countryInfo[country.name]?.description || "Excellent opportunities for professionals"}
                  </p>
                  
                  {/* Opportunities */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Sectors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {(countryInfo[country.name]?.opportunities || ["Various Sectors"]).map((sector, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/application-form">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-4 py-2 px-4 bg-gradient-to-r ${countryInfo[country.name]?.color || 'from-blue-500 to-purple-600'} text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Explore Opportunities
                  </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Go Global?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let us help you find the perfect international opportunity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Browse Opportunities
              </motion.button>
              </Link>
              <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Us
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RecruitingCountries;
