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
  

  const { colorMode } = useColorMode();

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
      {
        Project.map((e,i) => (
          <Project_Cart {...e} key={i} />
        ))
      }
    </Box>
  );
};

// export default Work;
