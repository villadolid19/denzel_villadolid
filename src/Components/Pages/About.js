import React from 'react'
import Pic1 from "../Assets/Don.jpg";
import Exper from "../Assets/experience.png";
import Arrow from "../Assets/arrow.png";
import { Link } from "react-scroll";
import { FaGraduationCap } from "react-icons/fa";
import '../Navbar.css';

export const About = () => {
  

  return (
    <section
      id="About"
      className="flex flex-col items-center p-2 h-[110%] lg:flex lg:justify-center lg:h-[100vh] lg:mb-36"
    >
      <p className="text-center text-lg text-slate-700">Get To Know More</p>
      <h1 className="text-center text-4xl">About Me</h1>

      <div className="flex flex-col items-center gap-4 w-[90%] mt-12 mb-12 lg:flex lg:flex-row lg:justify-center">
        <div className="img flex justify-center w-[500px]">
          <img
            src={Pic1}
            alt="Profile"
            className="h-[350px] w-[350px] rounded-[45px]"
          />
        </div>
        <div className="flex flex-col justify-center mt-4 w-[100%] lg:flex lg:flex-col lg:justify-center">
          <div className="flex flex-row gap-4">
            <div className="flex-1 text-center border border-slate-500 rounded-[35px] p-4">
              <img src={Exper} alt="Experience" className="h-12 w-12" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-[16px]">5 months Self-study</p>
              <ul>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
              </ul>
            </div>
            <div className="flex-1 text-center border border-slate-500 rounded-[35px] p-4">
              <FaGraduationCap className="h-12 w-12" />
              <h3 className="font-semibold">Education</h3>
              <p className="text-[16px]">
                Bachelors Degree
                <br />
                Bachelor of Science in Computer Science
              </p>
            </div>
          </div>
          <div className="mt-12 mb-6">
            <p className="font-md text-[20px] text-justify">
              I am a Computer Science graduate from Bohol Island State
              University (BISU). My experiences are based on what I studied
              during the progress of my research about system development. I was
              eager to study both frontend and backend to complete my system in
              my last year as a student. Now, I code as a hobby while waiting
              for an opportunity to be hired.
            </p>
          </div>
        </div>
      </div>
      <Link to="Exp" spy={true} smooth={true} offset={-100} duration={600}>
        <img src={Arrow} alt="Arrow icon" className="h-12 w-12 mt-12" />
      </Link>
    </section>
  );
}