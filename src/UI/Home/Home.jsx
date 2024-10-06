import React, { useState } from "react";
import { ImgHome } from "../../assets";
import { PopUp, WorkCard } from "../../components";
import { TbSunFilled, TbSunOff } from "react-icons/tb";
import { SkillCard } from "../../components";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { MdWork, MdPeopleAlt } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  Myskills,
  Testimoni1,
  Testimoni2,
  Testimoni3,
  Testimoni4,
} from "../../data/data";
import { Menulink } from "../../components/index";
import { Work } from "../../data/data";
import { FiShare } from "react-icons/fi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { CardAnimate } from "../../animation";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  const [open, setOpen] = useState(false);
  const PopupActive = () => {
    setOpen(!open);
  };

  return (
    <section
      className={`gra lg:text-left text-center select-none text-white ${toggle && "dark"}`}
    >
      {/* navbar desctop */}
      <section className="fixed hidden lg:block">
        <div className="w-[43.5rem] top-[19.7rem] -left-[20rem] relative bg-black bg-nav text-white  rotate-[-90deg] h-[4rem]">
          <nav className="container mx-auto px-7 py-5 flex justify-center">
            <Menulink />
          </nav>
        </div>
      </section>

      {/* navbar mobile and tablet  */}
      <section className=" fixed bottom-4 lg:hidden z-[9999] text-[40px] md:text-[60px]  w-full">
        <div className="text-white flex w-screen justify-center   ">
          <div className="bg-violet-900 bg-nav flex justify-center items-center w-[22rem] md:w-[45rem] rounded-full">
            <ul className="flex gap-x-8 md:gap-x-20 py-4">
              <li>
                <Link to="home" smooth={true} offset={-700} duration={1000}>
                  <AiOutlineHome />
                </Link>
              </li>
              <li>
                <Link to="skill" smooth={true} offset={-100} duration={1000}>
                  <FaNetworkWired />
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={100} duration={1000}>
                  <MdPeopleAlt />
                </Link>
              </li>
              <li>
                <Link to="work" smooth={true} offset={70} duration={1000}>
                  <MdWork />
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  offset={-10}
                  duration={1000}
                >
                  <AiOutlineMessage />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* body  */}
      <section>
        {/* hero section  */}
        <section id="home">
          <div className="flex justify-center items-center  pt-40 lg:pt-[10rem] md:pt-80">
            <div className="fixed z-[9999]  top-5 right-20">
              <div
                className="text-white  absolute text-[40px] cursor-pointer "
                onClick={() => onToggle()}
              >
                {toggle ? <TbSunOff className="text-black" /> : <TbSunFilled />}
              </div>
            </div>

            <div className="h-[100vh] mb-[10rem] lg:mb-0  w-[90%] flex justify-center items-center">
             
              <div className="flex flex-wrap justify-between items-center">
                {/* left   */}
                <div className="lg:flex-1 flex-col lg:items-start items-center flex justify-center"> 
                <div className="shape md:shape"></div>
                  <h1 className="lg:text-[200px] text-[7rem] md:text-[19rem] tema-text font-bold">
                    Halo
                  </h1>
                  <h2 className="text-[30px] md:text-[50px] lg:text-[30px] font-semibold mb-10">
                    I Am Fajar anugrah
                  </h2>
                  <p className="text-[20px] sans md:text-[2rem] ">
                    Hi. Welcome to my portfolio. experience in the world of
                    programming with a record of being a creative person in
                    something
                  </p>
                  <button
                    className=" flex text-center  box relative justify-center items-center gap-x-2  border  border-violet-900 text-white text-[20px] lg:text-[30px] md:text-[30px] rounded-lg
              mt-10 px-9 py-5 md:px-40 md:py-[2rem] lg:px-4 lg:py-4"
                    onClick={() => PopupActive()}
                  >
                    Contact me <FiShare />
                  </button>
                </div>
                {open && <PopUp setOpen={setOpen} />}

                <div className="mt-20 md:mt-60 z-10">
                  <div className="lg:ml-40 lg:block  flex justify-center items-center rounded-[20px]">
                    <img
                      src={ImgHome}
                      alt=""
                      className="lg:w-[35rem] lg:h-[30rem] w-[50rem] h-[20rem] md:w-[50rem] md:h-[40rem] "
                    />
                  </div>
                  {/* card Horo  */}
                  <div className="top-[60] ">
                    <div
                      className="absolute lg:right-[29rem] top-[50rem] md:top-[80rem] md:right-[35rem] right-[7rem] lg:top-[29rem]"
                    >
                      <div className="bg-white/30 shadow rounded-xl animate-bounce  bg px-[2rem] py-4 ">
                        <h3 className="text-white md:text-[30px]   text-[20px] font-semibold">
                          I am Fajar Anugrah
                        </h3>
                      </div>
                    </div>
                    <div className="absolute animate-bounce1  lg:right-[1rem] lg:top-[27.5rem] top-[55rem] right-[3rem] md:right-[1rem] md:top-[80rem] ">
                      <div className="bg-white/30 shadow rounded-xl bg  px-[4rem] py-4">
                        <h3 className="text-white  text-[20px] md:text-[30px] font-semibold">
                          Fullstack
                        </h3>
                      </div>
                    </div>
                    <div className="absolute   lg:right-[14rem] lg:top-[15rem] animate-bounce2 top-[60rem] right-[7rem] md:right-[16rem] md:top-[59rem]">
                      <div className="bg-white/30 shadow rounded-xl bg px-[3rem] py-4">
                        <h3 className="text-white md:text-[30px] text-[20px] font-semibold">
                          {" "}
                          Web Developer
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skil  */}
        <div
          id="skill"
          className={` text-white h-[20rem] mt-40 py-10 ${toggle && "dark"}`}
        >
          <div className="text-center">
            <h2 className="text-[30px] font-bold">My Skills</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-5 md:gap-x-10 mt-10">
            {Myskills.map((item) => (
              <SkillCard key={item} item={item}/>
            ))}
          </div>
        </div>

        {/* About  */}
        <div
          id="about"
          className={` flex w-[100%] justify-center items-center mt-[10rem] text-white ${
            toggle && "dark"
          } `}
        >
          <div className="h-[100vh] w-[80%]  flex justify-center items-center">
            <div className="flex justify-between items-center">
              {/* left  */}
              <div className="flex-1 lg:block hidden rounded-[20px]">
                <img src={ImgHome} alt="" />
              </div>

              {/* right   */}
              <div className="lg:flex-1 flex-col flex justify-center lg:items-start items-center">
                <h1 className="text-[40px] md:text-[80px] font-bold text-abt">About</h1>
                <p className="text-[20px] sans md:text-[28px] ">
                  Hi, my name is Fajar Anugrah. I am Indonesian. I have a high
                  talent and interest in learning in the field of programming.
                  this time I am an expert in frontend. I am a person who likes
                  to communicate and work with a team
                </p>
                <button
                    className=" flex text-center   box relative justify-center items-center gap-x-2  border  border-violet-900 text-white text-[20px] lg:text-[30px] md:text-[30px] rounded-lg
              mt-10 px-9 py-5 md:px-40 md:py-[2rem] lg:px-4 lg:py-4"
                    onClick={() => PopupActive()}
                  >
                    Contact me <FiShare />
                  </button>
              </div>
            </div>
          </div>
        </div>

        {/* work  */}
        <div id="work" className={` text py-20 ${toggle && "dark"}`}>
          <h2 className="text-center text-[40px] title text-white font-bold">
            Work
          </h2>
          <div className="flex flex-wrap justify-center items-center rounded-lg ">
            {Work.map((item) => (
              <WorkCard key={item} item={item} className="" />
            ))}
          </div>
        </div>

        {/* testimonails  */}
        <section id="testimonials" className="py-40">
          <h1 className="text-center  text-[40px] mb-20">Testimonials</h1>
          <div className=" container mx-auto flex justify-center">
            <div className="relative flex flex-wrap   justify-center items-center mx-20">
              {/* left */}
              <div className="flex-1 w-[20rem] text-[20px] md:text-[25px] lg:text-[20px]">
                <h1 className=" mb-10">My Testimonial Project</h1>
                <p>
                  there are some testimonials from our clients. in making
                  website page views
                </p>
              </div>

              {/* right  */}
              <div className="lg:w-[30rem] w-[20rem] text md:w-[40rem]">
                <Swiper
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {Testimoni1.map((item) => (
                      <CardAnimate key={item.id} item={item} />
                    ))}
                  </SwiperSlide>
                  <SwiperSlide>
                    {Testimoni2.map((item) => (
                      <CardAnimate key={item.id} item={item} />
                    ))}
                  </SwiperSlide>
                  <SwiperSlide>
                    {Testimoni3.map((item) => (
                      <CardAnimate key={item.id} item={item} />
                    ))}
                  </SwiperSlide>
                  <SwiperSlide>
                    {Testimoni4.map((item) => (
                      <CardAnimate key={item.id} item={item} />
                    ))}
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* footer  */}
        <section className="bg-black text-white bg-footer ">
          <div className="py-20">
            <p className="text-center font-bold text-[40px]">
              &copy;2023 by developed fajar anugrah
            </p>
          </div>
        </section>


      </section>
    </section>
  );
};

export default Home;