
import React from 'react';
import "../Navbar.css";

import Arrow from "../Assets/arrow.png";
import { Link } from "react-scroll";

//Front-end 
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";

//framework
import { FaReact } from "react-icons/fa";

//Backend
import { FaPhp } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";

export const Experience = () => {
  

  return (
    <section
      id="Exp"
      className="flex flex-col justify-center items-center mb-6 mt-12"
    >
      <p className="text-center text-lg text-slate-700">Explore My</p>
      <h1 className="text-center text-4xl">Experience</h1>

      <div className="flex flex-col w-[75%] justify-evenly lg:flex-row lg:justify-evenly gap-6 mb-8 mt-12">
        <div className="flex flex-col lg:w-1/2 border border-slate-500 rounded-3xl mb-4 p-4">
          <h2 className="text-gray-700 font-semibold text-xl mb-2">
            Frontend Development
          </h2>

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <ImHtmlFive2 className="h-6 w-6 m-2 text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">HTML</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <FaCss3 className="h-6 w-6 m-2 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">CSS</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <SiTailwindcss className="h-6 w-6 m-2 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">Tailwind CSS</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <TbBrandJavascript className="h-6 w-6 m-2 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">JaveScript</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <SiOpenai className="h-6 w-6 m-2 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">Chat GPT 3.5</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 border border-slate-500 rounded-3xl mb-4 p-4">
          <h2 className="text-gray-700 font-semibold text-xl mb-2">
            Framework
          </h2>

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <FaReact className="h-6 w-6 m-2 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">React.js</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <SiOpenai className="h-6 w-6 m-2 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">Chat GPT 3.5</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 border border-slate-500 rounded-3xl mb-4 p-4">
          <h2 className="text-gray-700 font-semibold text-xl mb-2">
            Backend Development
          </h2>

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <FaPhp className="h-8 w-8 m-2 text-violet-500" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">PHP</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <GrMysql className="h-7 w-7 m-2 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">MySQL</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <FaDatabase className="h-7 w-7 m-2 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">Database</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-row items-center">
              <div>
                <SiOpenai className="h-6 w-6 m-2 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mt-3">Chat GPT 3.5</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="Projects" spy={true} smooth={true} offset={-100} duration={600}>
        <img src={Arrow} alt="Arrow icon" className="h-12 w-12 mt-12 mb-6" />
      </Link>
    </section>
  );
};


/*




  */