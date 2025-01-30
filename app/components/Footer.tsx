import React from 'react';
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-custom-darkGreen bg-opacity-30 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <motion.a
            href="https://github.com/uudayan2002"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-custom-lightCream hover:text-custom-lightPeach transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/udayan-nath-846a3b243/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-custom-lightCream hover:text-custom-lightPeach transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/11rrgcMhaQ6hGUJ8fmNOtL7iM4OK3RAbP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-custom-lightCream hover:text-custom-lightPeach transition-colors"
            aria-label="Resume"
          >
            <CgNotes size={28}/>
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/uudayan2002/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-custom-lightCream hover:text-custom-lightPeach transition-colors"
            aria-label="Leetcode"
          >
            <SiLeetcode size={28}/>
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-custom-lightCream text-sm">
            Made by Udayan
          </p>
          <p className="text-custom-lightCream text-sm mt-2">
            © {currentYear} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;