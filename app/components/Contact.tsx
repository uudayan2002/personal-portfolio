"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    } else {
      setError(""); // Clear error if all fields are filled
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_3t6fzoj',       // Replace with your service ID
        'template_ew51048',      // Replace with your template ID
        {
          to_name: 'Recipient Name',   // Dynamic value for the recipient
          from_name: formData.name,    // Dynamic value for the sender's name
          from_email: formData.email,  // Dynamic value for the sender's email
          message: formData.message,   // Dynamic value for the message
        },                // Data to send to your template
        'ti31FdLOznoIvdr-T'           // Replace with your User ID
      );

      setStatus("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Error: Could not send message");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-custom-lightCream mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-custom-mediumGreen bg-opacity-50 rounded-md text-custom-lightCream placeholder-custom-lightCream placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-custom-lightPeach"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-custom-mediumGreen text-custom-lightCream px-6 py-3 rounded-full font-semibold text-lg hover:bg-custom-darkGreen transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>} {/* Error message */}
        {status && <p className="mt-4 text-center text-custom-lightCream">{status}</p>}
      </motion.form>
    </section>
  );
}
