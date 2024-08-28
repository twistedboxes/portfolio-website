import { motion } from 'framer-motion'
import React from 'react'

const AnimatedScroll = () => {
  return (
    <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: "-100%" }}
        exit={{ translateX: "100%" }}
        transition={{ duration:1, easings: ["easeIn", "easeOut"] }}
        className="fixed right-0 top-0 h-screen w-[200vw] origin-right bg-[--color-primary]"
      ></motion.div>
  )
}

export default AnimatedScroll
