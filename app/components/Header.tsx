"use client"

import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-custom-darkGreen bg-opacity-30 backdrop-blur-md fixed w-full z-10"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl font-bold text-custom-lightCream"
        >
          Udayan Kumar Nath
        </motion.div>
        <ul className="flex space-x-4">
          {["Home", "Skills", "Education", "Projects", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-custom-lightCream hover:text-custom-lightPeach transition-colors cursor-pointer"
              >
                {item}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
