import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineArrowUp,
} from "react-icons/ai";
import logo from "../images/logo.jpg";

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Recruitment", href: "/services" },
        { name: "HR Services", href: "/services" },
        { name: "Foreign Employment", href: "/services" },
        { name: "Consulting", href: "/services" },
      ]
    },
    {
      title: "Contact Info",
      links: [
        { name: "+977-1-4444444", icon: <AiOutlinePhone /> },
        { name: "info@risingrecruitment.com", icon: <AiOutlineMail /> },
        { name: "Kathmandu, Nepal", icon: <AiOutlineEnvironment /> },
      ]
    }
  ];

  const socialIcons = [
    { icon: <AiOutlineFacebook />, href: "https://facebook.com/example", color: "hover:text-blue-600" },
    { icon: <AiOutlineTwitter />, href: "https://twitter.com/example", color: "hover:text-blue-400" },
    { icon: <AiOutlineLinkedin />, href: "https://linkedin.com/example", color: "hover:text-blue-700" },
    { icon: <AiOutlineInstagram />, href: "https://instagram.com/example", color: "hover:text-pink-600" },
  ];

  return (
    <motion.footer 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <motion.img 
                  src={logo} 
                  alt="Rising Recruitment" 
                  className="h-16 w-auto mr-4"
                  whileHover={{ scale: 1.05 }}
                />
                <div>
                  <h3 className="text-2xl font-bold">Rising Recruitment</h3>
                  <p className="text-gray-300 text-sm">Your Trusted Partner</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting talent with opportunity across the globe. We specialize in professional recruitment, 
                HR services, and foreign employment solutions with integrity and excellence.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:bg-white/20 hover:scale-110`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                      >
                        {link.icon && <span className="text-blue-400">{link.icon}</span>}
                        <span>{link.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-white/20 pt-8 mb-8"
          >
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest opportunities and industry insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Rising Recruitment. All rights reserved.</p>
              <p className="mt-1">Ministry of Labour Approved License No. 878/067/68</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AiOutlineArrowUp className="text-xl" />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
