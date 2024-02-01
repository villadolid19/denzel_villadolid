
import React from 'react';
import {Navbar} from './Components/Navbar.js';
import {Profile} from "./Components/Pages/Profile.js";
import {About} from "./Components/Pages/About.js";
import {Experience} from "./Components/Pages/Experience.js";
import { Projects } from "./Components/Pages/Projects.js";
import {Contact} from "./Components/Pages/Contact.js";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Footer } from './Components/Pages/Footer.js';

import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css"; 


export default function App() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
      <motion.div
        style={y}
        className="App"
        id="App"
      >
        <Navbar />
          <Profile />
          <About />
          <Experience />
          <Projects />
          <Contact />
        <Footer />

      </motion.div>
    );
}
