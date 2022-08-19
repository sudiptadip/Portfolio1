import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../supporting/Sidebar";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Box className="navbox">
      <Link to={'/'}>
        <Box className="imagediv">
          <img
            src="https://i.postimg.cc/188HRPPp/8576308f3ed156f01bd9a865c05852e0-removebg-preview-2.png"
            alt=""
          />
        </Box>
      </Link>
      <Box className="icondiv">
        <Sidebar />
      </Box>
    </Box>
  );
}
