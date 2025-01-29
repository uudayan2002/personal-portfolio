"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const menuItems = ["Home", "Skills", "Education", "Projects", "Contact"]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-custom-darkGreen bg-opacity-30 backdrop-blur-md fixed w-full z-10"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl font-bold text-custom-lightCream"
          >
            Udayan Kumar Nath
          </motion.div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-custom-lightCream focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-4">
            {menuItems.map((item) => (
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
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: menuOpen ? 1 : 0,
            height: menuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <ul className="pt-4 space-y-2">
            {menuItems.map((item) => (
              <motion.li
                key={item}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                <ScrollLink
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block text-custom-lightCream hover:text-custom-lightPeach transition-colors cursor-pointer py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  )
}