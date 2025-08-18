import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  AiOutlineTeam, 
  AiOutlineTrophy, 
  AiOutlineGlobal, 
  AiOutlineHeart,
  AiOutlineCheckCircle,
  AiOutlineBulb,
  AiOutlineUser,
  AiOutlineStar
} from 'react-icons/ai';

const About = () => {
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

  const aboutSections = [
    {
      icon: <AiOutlineTeam className="text-4xl" />,
      title: "About Us",
      description: "Rising Recruitment Pvt. Ltd. is an integrated human resources company, Incorporated under the Ministry of Labor, Government of Nepal approved license no. 878/067/68. We are the outreach vehicle of Nepalese people aspiring to work in National & International Organizations.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <AiOutlineTrophy className="text-4xl" />,
      title: "Our Expertise",
      description: "Our company is centrally located in the heart of the capital city of Kathmandu. We are headed by a team of highly qualified professionals with many years of experience in various aspects of human resources. Our main strategy is to understand the customers' needs and provide the best solutions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <AiOutlineGlobal className="text-4xl" />,
      title: "Global Network",
      description: "Our wide network of recruiting centers that is spread over remote areas of Nepal has provided us access to a huge number of skilled and unskilled workforce. We further coach the approved candidates to enhance their work knowledge based on the countries they will be working in.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <AiOutlineHeart className="text-4xl" />,
      title: "Our Values",
      description: "Our core values are based on integrity and transparency, thus providing the clients and job seekers a reliable platform to conduct business. Choosing Rising Recruitment as your recruitment partner in Nepal will no doubt be a profitable and a lasting business relationship.",
      color: "from-red-500 to-red-600"
    }
  ];

  const stats = [
    { number: "12+", label: "Years of Experience" },
    { number: "100+", label: "Satisfied Clients" },
    { number: "50+", label: "Countries Served" },
    { number: "1000+", label: "Successful Placements" }
  ];

  const values = [
    "Integrity & Transparency",
    "Professional Excellence",
    "Client Satisfaction",
    "Global Standards",
    "Continuous Improvement",
    "Ethical Practices"
  ];

  const specializedSectors = [
    "Administration/ Public sector",
    "Construction & Infrastructure",
    "Energy",
    "Healthcare",
    "Hospitality",
    "Logistics",
    "Manufacturing",
    "Oil & Gas",
    "Shipping & Marine",
    "Trading"
  ];

  const recruitmentServices = [
    "Identifying the requirements and need for the role",
    "Job design",
    "Designing job and person descriptions",
    "Candidate screening",
    "Candidate profiling",
    "Short-listing applicants",
    "Interviewing",
    "Pre-employment checks & gathering references"
  ];

  const businessBenefits = [
    "Allocate the right person to the right job",
    "Improve hiring quality",
    "Improve recruitment performance",
    "Minimize recruitment process costs",
    "Influence employee retention, thus achieving a higher return on human capital investment"
  ];

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building bridges between talent and opportunity across the globe
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* About Sections */}
          <motion.div variants={itemVariants} className="space-y-8">
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center text-white mb-6`}>
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              variants={cardVariants}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AiOutlineCheckCircle className="text-2xl text-green-300 flex-shrink-0" />
                    <span className="text-lg">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* License Info */}
            <motion.div 
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Government Approved</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Ministry of Labour Approved</div>
                    <div className="text-sm text-gray-600">License No. 878/067/68</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Certified Recruitment Agency</div>
                    <div className="text-sm text-gray-600">Government of Nepal</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission and Vision Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div 
              variants={cardVariants}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center mb-6">
                <AiOutlineBulb className="text-4xl mr-4" />
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Our mission is to be the most reliable and trustworthy global recruitment partner to both our clients and candidates. By developing robust relations with various business entities and studying their corporate culture, we apply the executive search process that outlines a candidate's role in the organization.
              </p>
              <p className="text-lg leading-relaxed">
                To fulfill our commitment, we integrate comprehensive recruitment service strategies which are embedded in our business principles. Our approach is to invest time and effort in enhancing the skillset of the workforce and use our existing databases as a source to find valuable candidates.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              variants={cardVariants}
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center mb-6">
                <AiOutlineStar className="text-4xl mr-4" />
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Rising Recruitment Pvt. Ltd. aspires to be the most trusted global recruitment partner. In order to improve performance and create progressive transformation in the management, companies need to hire knowledgeable and well-trained professionals.
              </p>
              <p className="text-lg leading-relaxed">
                We endeavor to be the platform through which clients can acquire their suitable match and candidates can pursue their career with their ideal organization. To ensure the satisfaction of both parties, we work in close collaboration with diverse industries so that the staffing needs is consistently met.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Specialized Sectors */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.div 
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Specialized Sectors/Industries Served</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {specializedSectors.map((sector, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center"
                  whileHover={{ y: -2, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-sm font-semibold text-gray-700">{sector}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Recruitment Services */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.div 
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Recruitment Services Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recruitmentServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                  whileHover={{ x: 5 }}
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
          </motion.div>
        </motion.div>

        {/* Business Benefits */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.div 
            variants={cardVariants}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">How Rising Recruitment Pvt. Ltd. Help Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white bg-opacity-10 rounded-lg"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AiOutlineCheckCircle className="text-2xl text-green-300 flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Chairman's Message */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.div 
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <AiOutlineUser className="text-6xl text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Chairman's Message</h3>
              <p className="text-xl text-gray-600">Pradeep Thapa</p>
              <p className="text-lg text-gray-500">Managing Director, Rising Recruitment Pvt. Ltd.</p>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Over the years, more firms are seeking talent that can become a prized asset in their organization. As a premium executive search agency, our actions are geared towards participating in the advancement of our partners and affiliates by upholding the highest standards of professional ethics when providing recruitment services to them.
              </p>
              <p>
                Being in the executive search consultancy business for more than one decades, we are well-equipped with the determination to deliver innovative solutions for the betterment of the company. We work with a team of professionals and have successfully been associated with a number of establishments.
              </p>
              <p>
                Rising Recruitment Pvt. Ltd. has been a successful organization because of its people. We hire individuals who are experts in their respective fields and invest in their professional development through training and mentoring. By connecting capabilities of individuals who trust us with their recruitment needs, we aim to stand-in fruitful and durable relations.
              </p>
              <p>
                In order to propel our growth and become the most favored establishment, we ensure professionalism, distinction and commitment to our work. We follow inventive methods, create innovative approaches, and strengthen our approaches. Our undertaking are in line with our objective of maximizing service quality whilst benefitting the economy.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <motion.div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's build a successful future together
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
