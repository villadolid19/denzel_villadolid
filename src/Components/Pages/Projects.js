import React from "react";
import "../Navbar.css";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//Projects
import Login from "../Assets/Log-in.jpg";
import Dash from "../Assets/Dashboard.jpg";
import Anal from "../Assets/Analytics.jpg";
import Rept from "../Assets/Report.jpg";

export const Projects = () => {

  return (
    <section
      id="Projects"
      className="justify-center p-4 items-center lg:justify-center lg:items-center md:justify-center md:items-center sm:justify-center sm:items-center h-[100%] lg:w-full mt-40"
    >
      <p className="text-center text-lg text-slate-700">Explore My</p>
      <h1 className="text-center text-4xl mb-12">Projects</h1>
      <h3 className="lg:ml-36 md:ml-12 ml-6 text-2xl text-black">
        1st Project:
      </h3>
      <h3 className="ml-6 lg:ml-36 md:ml-12 sm:ml-6 text-2xl text-black font-semibold mb-12">
        BISU Alumni Tracer System
      </h3>
      <div className="flex flex-row gap-4 items-center justify-center ">
        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          pagination={{
            type: "progressbar",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="rounded-[24px] bg-transparent m-0 w-[1500px]"
        >
          {data.map((grab, idx) => (
            <SwiperSlide className="flex flex-col p-3 items-center h-auto text-black rounded-[15px]">
              <div
                key={idx.name}
                className="h-auto flex justify-center items-center rounded-[24px]"
              >
                <img
                  src={grab.img}
                  alt=""
                  className="block w-full h-auto rounded-[10px]"
                />
              </div>

              <div className="flex justify-center items-center gap-4 p-4">
                <h1 className="text-center text-2xl">{grab.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="">
        <h2 className="text-xl font-semibold text-slate-700">
          Project: <span className="font-bold">BISU Alumni tracer system</span>
        </h2>
        <ul className="gap-2 text-justify list-disc ml-8">
          <li className="mt-2">
            The Alumni Tracer system links academia and the professional world,
            tracking alumni careers for insights into program impact. It
            evaluates relevance, updates data on alumni employment, roles, and
            achievements, and adapts programs to industry trends, enhancing
            institutional relevance.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-slate-700 mt-12">
          Responsibilities
        </h2>
        <ul className="gap-2 text-justify list-disc ml-8">
          <li className="mt-2">
            <span className="font-semibold">Platform Development: </span>
            Designing, developing, and maintaining the overall platform,
            ensuring a smooth and user-friendly experience for both desktop and
            mobile users.
          </li>

          <li className="mt-2">
            <span className="font-semibold">
              User Interface (UI) and User Experience (UX) Design: </span>
            Creating and improving the visual design, layout, and navigation to
            enhance the user experience and engagement.
          </li>

          <li className="mt-2">
            <span className="font-semibold">Database Management: </span>
            Designing and implementing a robust relational database system to
            accurately retrieve comprehensive data about the alumni.
          </li>
        </ul>
      </div>
      
    </section>
  );
};

const data = [
  {
    name: "Log-in Page",
    img: Login,
  },
  {
    name: "Dashboard Page",
    img: Dash,
  },
  {
    name: "Analytics Page",
    img: Anal,
  },
  {
    name: "Report Page",
    img: Rept,
  },
];



 



