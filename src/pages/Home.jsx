import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Spase from "../supporting/Spase";
import WebsiteHead from "../supporting/WebsiteHead";

export default function Home() {
  let arr = [
    {
      id: 1,
      image: `https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/whatsapp_2.jpg?v=1659706408&width=1500`,
      title: "boAt",
      des: `BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.`,
      nlink: 'boat'
    },
    {
      id: 2,
      image: `https://images.hindustantimes.com/img/2022/08/06/1600x900/india-women-cricket-cwg-getty_1659798187705_1659798191354_1659798191354.jpg`,
      title: `Cricbuzz`,
      des: `Cricbuzz is an Indian cricket news website owned by Times Internet.`,
      nlink: `cricbuzz`
    },
    {
      id: 3,
      image: `https://www.incimages.com/uploaded_files/image/1920x1080/getty_663974538_353364.jpg`,
      title: `Bluefly`,
      des: `Bluefly offers an e-commerce platform that sells designer apparel and accessories, household products and accessories at discounted prices.`,
      nlink: `bluefly`
    },
  ];
  const [projectData, setProjectData] = useState(arr);

  return (
    <Box>
      <Navbar />
      <WebsiteHead />

      {projectData.map((e) => (
        <div>
          <Project {...e} />
          <Spase />
        </div>
      ))}
      <Footer />
    </Box>
  );
}
