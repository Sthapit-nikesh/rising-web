import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  AiOutlineUser, 
  AiOutlineMail, 
  AiOutlineMessage, 
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
  AiOutlineSend
} from 'react-icons/ai';

function Contact() {
    const [form, setForm] = useState({ 
        name: '', 
        email: '', 
        phone: '',
        subject: '',
        message: '' 
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setSubmitted(true);
        setIsSubmitting(false);
    };

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

    const contactInfo = [
        {
            icon: <AiOutlinePhone />,
            title: "Phone",
            details: ["+977-1-4444444", "+977-1-5555555"],
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <AiOutlineMail />,
            title: "Email",
            details: ["info@risingrecruitment.com", "support@risingrecruitment.com"],
            color: "from-green-500 to-green-600"
        },
        {
            icon: <AiOutlineEnvironment />,
            title: "Address",
            details: ["Kathmandu, Nepal", "Central Business District"],
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <AiOutlineClockCircle />,
            title: "Working Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
            color: "from-red-500 to-red-600"
        }
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
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get in touch with us today. We're here to help you find the perfect opportunity or the right talent.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <motion.div 
                            variants={cardVariants}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            {submitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <AiOutlineCheckCircle className="text-4xl text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        Thank You!
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Your message has been sent successfully. We'll get back to you within 24 hours.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setSubmitted(false);
                                            setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                                        }}
                                        className="btn-primary"
                                    >
                                        Send Another Message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold mb-8 text-gray-800">
                                        Send us a Message
                                    </h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div
                                                whileFocus={{ scale: 1.02 }}
                                                className="relative"
                                            >
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                        placeholder="Enter your full name"
                                                    />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                whileFocus={{ scale: 1.02 }}
                                                className="relative"
                                            >
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                        placeholder="Enter your email"
                                                    />
                                                </div>
                                            </motion.div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div
                                                whileFocus={{ scale: 1.02 }}
                                                className="relative"
                                            >
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <AiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                        placeholder="Enter your phone number"
                                                    />
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                whileFocus={{ scale: 1.02 }}
                                                className="relative"
                                            >
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Subject *
                                                </label>
                                                <div className="relative">
                                                    <AiOutlineMessage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        value={form.subject}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                        placeholder="Enter subject"
                                                    />
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            whileFocus={{ scale: 1.02 }}
                                            className="relative"
                                        >
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <div className="relative">
                                                <AiOutlineMessage className="absolute left-3 top-3 text-gray-400" />
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="5"
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                                    placeholder="Tell us about your inquiry..."
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="loading"></div>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <AiOutlineSend />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-white rounded-2xl shadow-lg p-6 card-hover"
                                whileHover={{ y: -5 }}
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white mb-4`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {info.title}
                                </h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Map Placeholder */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white rounded-2xl shadow-lg p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Our Location
                            </h3>
                            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                                <p className="text-gray-500">Interactive Map Coming Soon</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
