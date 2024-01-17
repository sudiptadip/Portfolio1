import React, { useState } from "react";
import "./work.module.css";
import {
  SiChakraui,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
} from "react-icons/si";
import ImageSlider from "./Image_Slider";
import { DiDotnet } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

function Project_Cart({
  title,
  description,
  techStack,
  mainImg,
  slideImg,
  githubUrl,
  live,
  deploy,
}) {
  const [lineHeight,setLineHight] = useState({
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    "-webkit-line-clamp": "5",
  });
  return (
    <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-0 md:mt-10  ">
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
        <div className="px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full">
          <div className="block lg:hidden" data-aos="fade-up">
            <ImageSlider data={slideImg} imgStyle={"style_md"} />
          </div>
          <h1
            className="mt-6 text-xl text-red-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
            data-aos="fade-right"
          >
            {title}
          </h1>
          <p
            style={lineHeight}
            className={`w-full  mt-2 ${"text-gray-500"} sm:mt-2 sm:text-xl line-clamp-5`}
            data-aos="fade-right"
          >
            {description}
          </p>

            <p className="text-red-400 text-right cursor-pointer" onClick={() => {
              if(lineHeight.display === undefined){
                setLineHight({
                  display: "-webkit-box",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  "-webkit-line-clamp": "5",
                })
              }else{
                setLineHight({});
              }
            }} >{lineHeight.display === undefined ? "Show Less" : "Show More"}</p>

          <div
            className="flex justify-center items-center gap-x-2 mt-5"
            data-aos="zoom-out"
          >
            {techStack.map((e) => TechStack(e))}
          </div>
          <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              <a href={githubUrl} target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-red-500 to-red-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                  Code
                </button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6" data-aos="zoom-out">
              {deploy ? (
                <a href={live} target={"_blank"}>
                  <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-red-500 to-red-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    Demo
                  </button>
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="hidden relative lg:block " data-aos="fade-left">
          <a href={live} target={"_blank"}>
            <img
              className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
              src={mainImg}
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project_Cart;

function TechStack(key) {
  switch (key) {
    case "html":
      return (
        <SiHtml5
          size="32px"
          color="#e34c26"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "javascript":
      return (
        <SiJavascript
          size="32px"
          color="yellow"
          style={{ backgroundColor: "black" }}
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "reactJs":
      return (
        <SiReact
          size="32px"
          color="#61DBFB"
          className="hover:animate-spin hover:cursor-pointer"
        />
      );
    case "redux":
      return (
        <SiRedux
          size="32px"
          color="#764abc"
          className="hover:animate-spin hover:cursor-pointer"
        />
      );
    case "chakraUi":
      return (
        <SiChakraui
          size="32px"
          color="#32c2e6"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "mongoDb":
      return (
        <SiMongodb
          size="32px"
          color="#3FA037"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "nodejs":
      return (
        <SiNodedotjs
          size="32px"
          color="#303030"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "expressJs":
      return (
        <SiExpress
          size="32px"
          color="green"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "dotnet":
      return (
        <SiDotnet
          size="32px"
          color="#592c8c"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "aspdotnet":
      return (
        <DiDotnet
          size="32px"
          color="#1583c3"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "csharp":
      return (
        <SiCsharp
          size="27px"
          color="#7710f1"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    case "bootstrap":
      return (
        <FaBootstrap
          size="32px"
          color="#7710f1"
          className="hover:animate-bounce hover:cursor-pointer"
        />
      );
    default:
      break;
  }
}
