import React from "react";
import styles from "../GitCalender/Github.module.css";
import ImageSlider from "./Image_Slider";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { Project } from "./Project";
import Project_Cart from "./Project_Cart";

export const Work = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);
  // const expedia = [
  //   {
  //     id: 1,
  //     src: homePage,
  //   },
  //   {
  //     id: 2,
  //     src: "data:image/jpeg;base64,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",
  //   },
  //   {
  //     id: 3,
  //     src: "data:image/jpeg;base64,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",
  //   },
  //   {
  //     id: 4,
  //     src: "data:image/jpeg;base64,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",
  //   },
  // ];
  // const skinstore = [
  //   {
  //     id: 1,
  //     src: s1,
  //   },
  //   {
  //     id: 2,
  //     src: s2,
  //   },
  //   {
  //     id: 3,
  //     src: s3,
  //   },
  //   {
  //     id: 4,
  //     src: s4,
  //   },
  // ];
  // const fitmeal = [
  //   {
  //     id: 1,
  //     src: f1,
  //   },
  //   {
  //     id: 2,
  //     src: f2,
  //   },
  //   {
  //     id: 3,
  //     src: f3,
  //   },
  //   {
  //     id: 4,
  //     src: f4,
  //   },
  // ];

  const { colorMode, toggleColorMode } = useColorMode();

  let style_md =
    "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";
  return (
    <Box
      name="projects"
      mt={{
        lg: "-280px",
        xl: "-280px",
        md: "0px",
        sm: "0px",
      }}
      color={"white"}
    >
      <Heading
        m="auto"
        mb="50px"
        color={colorMode === "light" ? "black" : "white"}
        className={styles.Heading}
        size="xl"
        fontFamily="poppins"
        textAlign={"center"}
      >
        {" "}
        My <span style={{ color: "#dc143c" }}> Project </span>
      </Heading>

      {/* <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-0 md:mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
          <div className="px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full">
            <div className="block lg:hidden" data-aos="fade-up">
              <ImageSlider data={expedia} imgStyle={style_md} />
            </div>
            <h1
              className="mt-6 text-xl text-red-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
              data-aos="fade-right"
            >
              Expedia Clone
            </h1>
            <p
              className={`w-full  mt-2 ${"text-gray-500"} sm:mt-2 sm:text-xl`}
              data-aos="fade-right"
            >
              Expedia is one of the fastest growing online travel portals in
              Asia, offering travellers an extensive selection of hotels,
              activities and travel services.
            </p>
            <div
              className="flex justify-center items-center gap-x-2 mt-5"
              data-aos="zoom-out"
            >
              <div>
                <SiHtml5
                  size="32px"
                  color="#e34c26"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div className="hover:animate-bounce hover:cursor-pointer" style={{backgroundColor: 'black'}} >
                <SiJavascript
                  size="32px"
                  color="yellow"
                  // className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiReact
                  size="32px"
                  color="#61DBFB"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
              <div>
                <SiCss3
                  size="32px"
                  color="#264de4"
                  className="hover:animate-bounce hover:cursor-pointer"
                />
              </div>
              <div>
                <SiRedux
                  size="32px"
                  color="#764abc"
                  className="hover:animate-spin hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a
                  href="https://github.com/manojattri181/Expedia-clone"
                  target={"_blank"}
                >
                  <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-red-500 to-red-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    {" "}
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6" data-aos="zoom-out">
                <a href="https://expedia-tawny.vercel.app/" target={"_blank"}>
                  <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-red-500 to-red-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden relative lg:block " data-aos="fade-left">
            <a href="https://expedia-tawny.vercel.app/" target={"_blank"}>
              <img
                className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                src={homePage}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div> */}
      {
        Project.map((e,i) => (
          <Project_Cart {...e} key={i} />
        ))
      }
    </Box>
  );
};

// export default Work;
