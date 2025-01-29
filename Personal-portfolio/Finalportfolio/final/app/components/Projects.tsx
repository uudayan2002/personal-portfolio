"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  { id: 1, title: "Stock Portfolio Tracker", description: "A stock portfolio management app for real-time tracking and analysis, and a Grocery Product quality grading system for product assessment.", link: "https://github.com/uudayan2002/Stock-portfolio-Capx.git",image:"https://i.imgur.com/FQnj3dr.png" },
  { id: 2, title: "Grocery Product quality grading system", description: "A React.js frontend for real-time camera feeds and integrated YOLO NAS for grocery product detection, connecting with Gemini AI to retrieve product details and assess quality and fitness for delivery.", link: "https://github.com/uudayan2002/Flipkart_Grid_Robotics.git",image:`/placeholder.svg?height=200&width=400` },
  { id: 3, title: "Train Reservation System", description: "A React.js app with secure JWT-based authentication, streamlined reservation management through RESTful APIs built with Express.js, and architected scalable systems to optimize the booking process.", link: "https://github.com/uudayan2002/Train-Reservation-System.git", image:`/placeholder.svg?height=200&width=400` },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-custom-lightPeach text-center mb-12"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-custom-darkGreen bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden flex flex-col transform-gpu will-change-transform"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-semibold text-custom-lightPeach mb-2 transform-gpu">{project.title}</h3>
              <p className="text-custom-lightCream">{project.description}</p>
            </div>
            <motion.a
              href={project.link}
              className="mt-4 inline-block border-2 border-custom-lightPeach text-custom-lightPeach px-6 py-2 rounded-full text-lg text-center hover:bg-custom-lightPeach hover:text-custom-darkGreen transition-all duration-300 mb-6 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
