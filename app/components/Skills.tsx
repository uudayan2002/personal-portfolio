"use client"

import { motion } from "framer-motion"
import { 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiC,
  SiPython,
  SiOpenjdk,
  SiGit,
  SiFigma,
  SiAmazon,
  SiPostman
} from 'react-icons/si'

const skillsData = {
  Frontend: [
    { name: "ReactJS", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
  ],
  Backend: [
    { name: "NodeJs", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Java (Spring Boot)", icon: SiSpringboot },
  ],
  Others: [
    { name: "C", icon: SiC },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: SiOpenjdk },
    { name: "Postman", icon: SiPostman },
    { name: "Git", icon: SiGit },
    { name: "Figma", icon: SiFigma },
    { name: "AWS", icon: SiAmazon },
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
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