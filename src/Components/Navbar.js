import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css"; 
import "./Navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  
  return (
    <nav className="lg:fixed z-[1000] top-0 h-18 lg:overflow-hidden w-full lg:flex fixed justify-between items-center rounded-lg bg-slate-50 text-gray-600 shadow-lg">
      <div className="text-2xl m-4 lg:ml-12 top-5 font-bold">Denzel</div>

      <div
        className="menu lg:hidden flex absolute top-4 right-4 text-3xl"
        onClick={handleClick}
      >
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <div className="lg:flex mr-12 justify-center rounded-lg">
        <ul
          className={`lg:flex flex-col lg:flex-row lg:mr-8 right-0 ${
            click ? "lg:flex ml-12" : "hidden"
          }`}
        >
          <li className="w-full text-center text-xl">
            <Link
              to="Profile"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-110}
              duration={600}
              activeClass="active"
            >
              Profile
            </Link>
          </li>

          <li className="w-full text-center text-xl">
            <Link
              to="About"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-110}
              duration={600}
              activeClass="active"
            >
              About
            </Link>
          </li>

          <li className="w-full text-center text-xl">
            <Link
              to="Exp"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-110}
              duration={600}
              activeClass="active"
            >
              Experience
            </Link>
          </li>

          <li className="w-full text-center text-xl">
            <Link
              to="Projects"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-110}
              duration={600}
              activeClass="active"
            >
              Projects
            </Link>
          </li>

          <li className="w-full text-center text-xl">
            <Link
              to="Contact"
              className="list p-3 block m-4 text-gray-600 font-bold hover:underline hover:cursor-pointer hover:opacity-75"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-110}
              duration={600}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
