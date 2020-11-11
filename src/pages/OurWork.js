import React from "react";
import github from '../img/github-battle.png'
import speed from '../img/speed-typing-game.png'
import music from '../img/music.png'
import color from '../img/color.png'
import styled from 'styled-components'
import './Proj.css'
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";

const OurWork = () => {
  return (
    
<section class="projects">
<motion.div
    exit="exit"
    variants={pageAnimation}
    initial="hidden"
    animate="show"
  >
        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <div>
        <motion.h2 variants={fade} className="projName">My Music Library</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://porjotooon.github.io/music-library/">
          <Hide>
            <motion.img variants={photoAnim} class="projImages" src={music} alt="speed" width="600" height="auto"/>
          </Hide>
        </a>
      </div>
      <div>
        <motion.h2 variants={fade} className="projName">Color Picker</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://porjotooon.github.io/color-picker/">
          <Hide>
            <motion.img variants={photoAnim} class="projImages" src={color} alt="speed" width="600" height="auto"/>
          </Hide>
        </a>
      </div>
      <div>
        <motion.h2 variants={fade} className="projName">Speed Typing Game</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://porjotooon.github.io/speed-typing-game/">
          <Hide>
            <motion.img variants={photoAnim} class="projImages" src={speed} alt="speed" width="600" height="auto"/>
          </Hide>
        </a>
      </div>
      <div>
        <motion.h2 variants={fade} className="projName">Github Battle</motion.h2>
        <a href="https://porjotooon.github.io/github-battle/">
          <motion.img variants={photoAnim} class="projImages" src={github} alt="github" width="600" height="auto"/>
        </a>
      </div>
      </motion.div>
    </section>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;