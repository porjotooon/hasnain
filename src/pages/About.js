import React from 'react'
import AboutSection from '../components/AboutSection'
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const About = () => {
    return(
        <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
        <AboutSection/>
        </motion.div>
    )
}

export default About