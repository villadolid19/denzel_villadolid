import React from "react";
import Pic1 from "../Assets/Don1.jpg";
import git from "../Assets/github.png";
import Resume from "../Assets/VILLADOLID-Resume.pdf";
import { Link } from "react-scroll";
import "../Navbar.css"


export const Profile = ({ elementId }) => {

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  const openGit = () => {
    window.open("https://github.com/", "_blank");
  };

  return (
    <section
      id="Profile"
      className="flex-row-reverse justify-center items-center gap-20 mb-24 lg:flex lg:justify-center lg:items-center lg:h-[100vh]"
    >
      <div className="flex justify-center items-center">
        <img
          src={Pic1}
          className="mt-24 rounded-full h-[300px] w-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
          alt="Denzel Villadolid"
        />
      </div>

      <div className="items-center self-center text-center font-semibold gap-6 mt-12">
        <p className="text-center text-xl text-slate-500 m-4">Hello, I'm</p>
        <h1 className="text-center text-4xl">Denzel Dax Darryl Villadolid</h1>
        <p className="text-2xl text-slate-600">A Developer</p>

        <div className="flex justify-center gap-3 mt-3">
          <button
            className="cursor-pointer p-2 w-36 rounded-3xl border-2 border-slate-400 hover:bg-slate-400 hover:border-black"
            onClick={openResume}
          >
            Download CV
          </button>
          <Link
            to="Contact"
            className="cursor-pointer p-2 w-36 rounded-3xl border-2 border-black bg-slate-400 text-black"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            Contact Info
          </Link>
        </div>

        <div className="flex justify-center mt-3 gap-3">
          <img
            src={git}
            className="h-7 w-7 cursor-pointer"
            alt="Git"
            onClick={openGit}
          />
        </div>
      </div>
    </section>
  );
};
