"use client"

import { motion } from "framer-motion"
import {
  CodepenIcon as Javascript,
  CodepenIcon as React,
  FileCode2,
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  Server,
  Database,
  EclipseIcon as Java,
  GitBranch,
  Figma,
  Cloud,
  Code,
  Code2,
} from "lucide-react"

const skillsData = {
  Frontend: [
    { name: "JavaScript", icon: Javascript },
    { name: "ReactJS", icon: React },
    { name: "React-Native", icon: React },
    { name: "HTML", icon: Html5 },
    { name: "CSS", icon: Css3 },
  ],
  Backend: [
    { name: "NodeJs", icon: Server },
    { name: "Express", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Java (Spring Boot)", icon: Java },
  ],
  Others: [
    { name: "C", icon: Code },
    { name: "C++", icon: Code2 },
    { name: "Java", icon: Java },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: Figma },
    { name: "AWS", icon: Cloud },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-custom-lightPeach text-center mb-12"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-custom-darkGreen bg-opacity-50 backdrop-blur-md rounded-lg p-6 transition-colors duration-300 hover:bg-custom-mediumGreen hover:bg-opacity-70"
          >
            <h3 className="text-2xl font-semibold text-custom-lightPeach mb-4">{category}</h3>
            <ul className="space-y-3">
              {skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  className="text-custom-lightCream flex items-center space-x-2 transition-colors duration-300 hover:text-custom-lightPeach"
                >
                  <skill.icon className="w-5 h-5" />
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
