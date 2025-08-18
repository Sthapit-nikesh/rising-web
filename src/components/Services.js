import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AiOutlineUsergroupAdd,
  AiOutlineSolution,
  AiOutlineGlobal,
  AiOutlineCheckCircle,
  AiOutlineArrowRight,
  AiOutlineSearch,
  AiOutlineFileText,
  AiOutlineTeam,
  AiOutlineSetting,
  AiOutlineSafety,
  AiOutlineUserSwitch,
  AiOutlineCalendar,
  AiOutlineAudit,
  AiOutlineRocket,
  AiOutlineTrophy
} from "react-icons/ai";

const ServiceCard = ({ icon, title, description, children, delay, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-white p-8 h-full">
        {/* Icon */}
        <motion.div 
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        >
          <div className="text-2xl text-white">{icon}</div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Content */}
        <div className="space-y-4">
          {children}
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 5 }}
        >
          <AiOutlineArrowRight className="text-2xl text-blue-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Box = ({ title, children }) => (
  <motion.div 
    className="border border-gray-200 p-6 rounded-xl bg-gray-50 hover:bg-white transition-colors duration-300"
    whileHover={{ y: -2 }}
  >
    <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
      <AiOutlineCheckCircle className="text-green-500 mr-2" />
      {title}
    </h4>
    {children}
  </motion.div>
);

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const comprehensiveServices = [
    "Executive Search",
    "Assigned Advertising and Selection",
    "Administrative and Support Services",
    "Post selection coordination with selected candidates",
    "Reference checks on Selected Candidates",
    "Recruitment Campaigns",
    "Manpower Outsourcing"
  ];

  const hrConsultingServices = [
    "Payroll Management",
    "Procurement Services",
    "Logistics Support",
    "Corporate Departmental Roles",
    "Non-revenue Producing Functions",
    "Business Process Optimization"
  ];

  const outsourcingBenefits = [
    "Reduce costs through superior performance",
    "12 years of experience in outsourcing",
    "Credibility with labor law compliance",
    "Improved risk management",
    "Verified employee requests",
    "Working visa arrangements"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={headerVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive recruitment solutions tailored to meet your business needs
          </motion.p>
        </motion.div>

        {/* Comprehensive Recruitment Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <AiOutlineSearch className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Recruitment Services</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide the following comprehensive recruitment services to meet all your hiring needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comprehensiveServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <ServiceCard
            icon={<AiOutlineUsergroupAdd />}
            title="Professional Recruitment"
            description="Connecting you with skilled professionals across all industries with our proven recruitment process."
            delay={0}
            index={0}
          >
            <Box title="Our Expertise">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-gray-800 mb-2">Professional Human Resources</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Doctors, Engineers, Scientists, Professors</li>
                    <li>• Chartered Accountants & Managers</li>
                    <li>• Architects, Geologists, Banking Specialists</li>
                    <li>• Certified Engineers (Civil & M.E.P)</li>
                    <li>• Aeronautical Industry Professionals</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-gray-800 mb-2">Skilled Human Resources</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pharmacists & Laboratory Technicians</li>
                    <li>• Security Officers & Guards</li>
                    <li>• Chefs & Cooks</li>
                    <li>• Construction Specialists</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h5 className="font-semibold text-gray-800 mb-2">Semi-skilled & Unskilled</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Electric, Plumbing & Mechanic Assistants</li>
                    <li>• Kitchen Helpers & Gardeners</li>
                    <li>• Cleaners & Construction Workers</li>
                  </ul>
                </div>
              </div>
            </Box>

            <Box title="Recruitment Procedure">
              <div className="space-y-3">
                {[
                  "Data Bank Update & CV Collection",
                  "Advertisement & Shortlisting",
                  "Interview & Technical Screening",
                  "Trade Tests & Profile Forwarding",
                  "Medical Examination & Verification",
                  "Orientation & Travel Arrangement"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </motion.div>
                ))}
              </div>
            </Box>
          </ServiceCard>

          <ServiceCard
            icon={<AiOutlineSolution />}
            title="HR Consulting"
            description="Being busy is one of the hallmark of a successful business, but keeping quality high shouldn't be compromised."
            delay={0.2}
            index={1}
          >
            <Box title="HR Consulting Services">
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  We offer helping aid to successful and promising businesses that are excessively occupied and fail to examine non-revenue producing functions, such as payroll, procurement or logistics.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {hrConsultingServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <AiOutlineCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Box>

            <Box title="Why Choose Our HR Consulting">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                  <AiOutlineTeam className="text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Dependable Ally</div>
                    <div className="text-xs text-gray-600">Become a dependable ally to rising titans of all industries</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                  <AiOutlineSetting className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Enhanced Attention</div>
                    <div className="text-xs text-gray-600">Fill any key corporate departmental role that demands enhanced attention</div>
                  </div>
                </div>
              </div>
            </Box>
          </ServiceCard>

          <ServiceCard
            icon={<AiOutlineGlobal />}
            title="Outsourcing Services"
            description="'We give you the best, to make you the best' - Delivering and outperforming client expectations across industries."
            delay={0.4}
            index={2}
          >
            <Box title="Outsourcing Benefits">
              <div className="space-y-3">
                {outsourcingBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <AiOutlineCheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Box>

            <Box title="Outsourcing Services">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">Payroll Management</h5>
                  <p className="text-sm text-gray-600">
                    Comprehensive payroll services including processing, compliance, and reporting
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">Contractual Manpower</h5>
                  <p className="text-sm text-gray-600">
                    Flexible staffing solutions with contractual arrangements for various business needs
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">Quality Assurance</h5>
                  <p className="text-sm text-gray-600">
                    We outsource only the best quality professionals around the world
                  </p>
                </div>
              </div>
            </Box>
          </ServiceCard>
        </div>

        {/* Hiring the Right Employee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <AiOutlineTrophy className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Hiring the Right Employee</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven methodology ensures you find and hire the perfect candidate for your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Plan Your Employee Recruiting Strategy",
                  description: "Develop a comprehensive recruitment plan that aligns with your business goals and culture",
                  icon: <AiOutlineRocket />
                },
                {
                  title: "Define the Job Before Hiring an Employee",
                  description: "Create detailed job descriptions and specifications to attract the right candidates",
                  icon: <AiOutlineFileText />
                },
                {
                  title: "Use a Checklist for Hiring an Employee",
                  description: "Follow our systematic checklist to ensure no critical steps are missed in the hiring process",
                  icon: <AiOutlineCheckCircle />
                },
                {
                  title: "Recruit the Right Candidates When Hiring an Employee",
                  description: "Implement targeted recruitment strategies to reach qualified candidates",
                  icon: <AiOutlineSearch />
                },
                {
                  title: "Review Credentials and Applications Carefully",
                  description: "Thoroughly evaluate candidate qualifications, experience, and fit for the position",
                  icon: <AiOutlineAudit />
                },
                {
                  title: "Prescreen Your Candidates",
                  description: "Conduct initial screenings to assess candidate suitability before formal interviews",
                  icon: <AiOutlineUserSwitch />
                },
                {
                  title: "Ask the Right Job Interview Questions",
                  description: "Use behavioral and situational questions to evaluate candidate competencies",
                  icon: <AiOutlineTeam />
                },
                {
                  title: "Check Backgrounds and References When Hiring an Employee",
                  description: "Verify candidate credentials, work history, and professional references",
                  icon: <AiOutlineSafety />
                },
                {
                  title: "Use Effective Employment Letters When Hiring an Employee",
                  description: "Draft clear, comprehensive employment offers and contracts",
                  icon: <AiOutlineFileText />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl text-white">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AiOutlineFileText className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Documentation</h4>
              <p className="text-gray-600 text-sm">Complete visa and work permit processing assistance</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AiOutlineSafety className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Compliance</h4>
              <p className="text-gray-600 text-sm">Full compliance with labor laws and immigration requirements</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AiOutlineUserSwitch className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Placement</h4>
              <p className="text-gray-600 text-sm">International job placement and relocation services</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AiOutlineCalendar className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Support</h4>
              <p className="text-gray-600 text-sm">Ongoing support and cultural training programs</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <a href="/application-form">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Our Services
          </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
