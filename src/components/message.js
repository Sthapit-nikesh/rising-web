import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { chairmanMessage } from "../data";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AiOutlineMessage, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { BsQuote } from "react-icons/bs";

const MessageSlider = () => {
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

  // Enhanced testimonials data
  const enhancedMessages = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      message: "Rising Recruitment has been instrumental in helping us find exceptional talent. Their professional approach and deep understanding of our industry needs have made them our trusted recruitment partner.",
      author: "John Smith",
      position: "Managing Director",
      company: "Tech Solutions Inc.",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      message: "The team at Rising Recruitment truly understands the international job market. They helped me secure an excellent position abroad with complete support throughout the entire process.",
      author: "Sarah Johnson",
      position: "Senior Manager",
      company: "Global Healthcare",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      message: "Outstanding service and professionalism. They not only found the right candidates for us but also ensured a smooth onboarding process. Highly recommended!",
      author: "Michael Chen",
      position: "HR Director",
      company: "Innovation Corp",
      rating: 5
    }
  ];

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chairman's Message Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-center mb-6">
                <AiOutlineUser className="text-6xl mr-4" />
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-2">Chairman's Message</h2>
                  <p className="text-xl opacity-90">{chairmanMessage.name}</p>
                  <p className="text-lg opacity-80">{chairmanMessage.position}</p>
                  <p className="text-lg opacity-80">{chairmanMessage.company}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {chairmanMessage.message.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <BsQuote className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{chairmanMessage.name}</p>
                      <p className="text-gray-600">{chairmanMessage.position}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Managing Director</p>
                    <p className="font-semibold text-gray-800">Rising Recruitment Pvt. Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients and candidates have to say about their experience with us.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div variants={itemVariants} className="relative">
          <Swiper
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonials-swiper"
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {enhancedMessages.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-8 h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <AiOutlineMessage className="text-4xl text-blue-500 opacity-20" />
                    <div className="flex space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <AiOutlineStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{item.message}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.author}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/64x64/cccccc/666666?text=?" + item.author.charAt(0);
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.author}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {item.position}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="swiper-button-prev !text-blue-500 !bg-white !w-12 !h-12 !rounded-full !shadow-lg after:!text-lg"></div>
          <div className="swiper-button-next !text-blue-500 !bg-white !w-12 !h-12 !rounded-full !shadow-lg after:!text-lg"></div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination !bottom-[-40px]"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "500+", label: "Successful Placements" },
            { number: "50+", label: "Partner Companies" },
            { number: "12+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
              whileHover={{ y: -5, scale: 1.05 }}
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

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let us help you achieve your career goals or find the perfect talent for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/application-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Journey
              </motion.button>
              </Link>
              <Link to="/company-profile">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View More Testimonials
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx>{`
        .testimonials-swiper {
          padding-bottom: 60px;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e0;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: scale(1.2);
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          color: #667eea;
          background: white;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </motion.section>
  );
};

export default MessageSlider;
