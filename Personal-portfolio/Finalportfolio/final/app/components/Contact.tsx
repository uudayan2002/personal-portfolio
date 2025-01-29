"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-custom-lightPeach text-center mb-12"
      >
        Get In Touch
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-custom-lightCream mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 bg-custom-mediumGreen bg-opacity-50 rounded-md text-custom-lightCream placeholder-custom-lightCream placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-custom-lightPeach"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-custom-lightCream mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 bg-custom-mediumGreen bg-opacity-50 rounded-md text-custom-lightCream placeholder-custom-lightCream placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-custom-lightPeach"
            placeholder="your@email.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-custom-lightCream mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 bg-custom-mediumGreen bg-opacity-50 rounded-md text-custom-lightCream placeholder-custom-lightCream placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-custom-lightPeach"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-custom-mediumGreen text-custom-lightCream px-6 py-3 rounded-full font-semibold text-lg hover:bg-custom-darkGreen transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  )
}
