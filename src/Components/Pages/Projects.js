import React from "react";
import "../Navbar.css";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Pagination, Navigation } from "swiper/modules";
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
      className="justify-center p-6 items-center lg:justify-center lg:items-center md:justify-center md:items-center sm:justify-center sm:items-center h-[100%] lg:w-full mt-40"
    >
      <p className="text-center text-lg text-slate-700">Explore My</p>
      <h1 className="text-center text-4xl mb-12">Projects</h1>
      <h3 className="lg:ml-36 md:ml-12 ml-6 text-2xl text-black">
        1st Project:
      </h3>
      <h3 className="ml-6 lg:ml-36 md:ml-12 sm:ml-6 text-2xl text-black font-semibold mb-12">
        BISU Alumni Tracer System
      </h3>
      <div className="flex flex-row gap-4 p-6 items-center justify-center ">
      
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
            type: 'progressbar',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="rounded-[24px] bg-transparent p-6 m-0 w-[1500px]"
        >
          {data.map((grab, idx) => (
            <SwiperSlide className="flex flex-col p-6 items-center h-auto text-black rounded-[24px]">
              <div
                key={idx.name}
                className="h-auto flex justify-center items-center rounded-[24px]"
              >
                <img
                  src={grab.img}
                  alt=""
                  className="block w-[1100px] h-auto rounded-[24px]"
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
        <h2 className="text-xl font-semibold text-slate-700">Key Features:</h2>
        <ul className="gap-2 text-justify list-disc ml-8">
          <li className="mt-2">
            Imports a CSV file containing basic information about the particular
            graduates.
          </li>
          <li className="mt-2">
            While importing, the system creates an account for each alumnus and
            sends a notification to every graduate in the CSV file, providing
            them with their username and the default password.
          </li>
          <li className="mt-2">
            The alumni can log in and are redirected to a password change page
            to personalize their accounts. After that, they can update their
            work information and employment status. Additionally, we have a
            history page that both admins and users can view to see if the
            alumni have updated their information multiple times.
          </li>
          <li className="mt-2">
            The admin also has the capability to edit alumni information, manage
            events, and generate reports for each batch whether the alumni is
            employed, unemployed, or inactive user.
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



 



