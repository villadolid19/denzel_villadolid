import React from 'react'
import Mail from "../Assets/email.png";
import { FaGithub } from "react-icons/fa6";
import "../Navbar.css";

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex justify-center items-center flex-col h-[80vh]"
    >
      <p className="text-center text-lg text-slate-700">Get in Touch</p>
      <h1 className="text-center text-4xl">Contact Me</h1>

      <div className="flex flex-row justify-center lg:w-[600px] h-24 rounded-full border border-solid border-gray-500 bg-gray-250 m-8 p-2">
        <div className="flex items-center justify-center gap-2 m-4">
          <img src={Mail} alt="Email icon" className="h-12 w-12" />
          <p>
            <a
              href="mailto:villadolid@gmail.com"
              className="hover:underline hover:opacity-70"
            >
              MyMail@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container flex items-center justify-center gap-2 m-4">
          <FaGithub className='h-10 w-10'/>
          <p>
            <a href="https://github.com/">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}
