"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    year: "2021 - 2025",
    degree: "B. Tech in Electrical Engineering",
    institution: "JIS College of Engineering, Kalyani, Nadia",
    cgpa: "8.2",
  },
  {
    year: "2019 - 2021",
    degree: "Indian School Certificate(class XII)",
    institution: "Don Bosco School, Bandel",
    percentage: "88.50%",
  },
  {
    year: "2008 - 2018",
    degree: "Indian Certificate of Secondary Education(class X)",
    institution: "Don Bosco School, Bandel",
    percentage: "85.60%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-custom-lightPeach text-center mb-12"
      >
        Education
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8 flex items-start"
          >
            <div className="w-1/4 pr-4">
              <div className="text-custom-lightPeach font-semibold">{item.year}</div>
            </div>
            <div className="w-3/4">
              <div className="bg-custom-mediumGreen bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-custom-lightPeach mb-2">{item.degree}</h3>
                <p className="text-custom-lightCream mb-2">{item.institution}</p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-custom-lightPeach font-medium"
                >
                  {item.cgpa ? `CGPA: ${item.cgpa}` : `Percentage: ${item.percentage}`}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
