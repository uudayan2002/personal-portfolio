"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 sm:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full sm:w-2/3 md:w-1/3 max-w-[300px] md:max-w-none mb-8 md:mb-0 flex justify-center md:justify-start"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <Image
              src="https://i.imgur.com/5ySJ9Zq.jpeg"
              alt="Udayan Kumar Nath"
              fill
              className="rounded-full shadow-lg object-cover"
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center md:text-left md:w-2/3 md:pl-8 max-w-2xl mx-auto md:mx-0"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-custom-lightPeach mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Udayan Kumar Nath
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-custom-lightCream mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software Engineer/Developer
          </motion.p>
          <motion.p
            className="text-base sm:text-lg text-custom-lightCream mb-6 px-4 sm:px-6 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Hi, I'm Udayan Kumar Nath, a dedicated software engineer with a strong foundation in programming and a
            passion for creating innovative, efficient solutions. Skilled in full-stack development, databases, and
            modern tools, I enjoy tackling challenges and building impactful projects that make a difference.
          </motion.p>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-custom-mediumGreen text-custom-lightCream px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-custom-darkGreen transition-colors"
            >
              View My Work
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}