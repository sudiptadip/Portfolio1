import { Box, LightMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.css";
import './SBContent.css'

export default function SBContent({onClose}) {
    function handelclick(){
      onClose()
    }
  return (
    <div className="sidebarmaindiv" >
      <Link to={"/"}>
        <Box className="imagediv" onClick={()=> onClose()}>
          <img
            src="https://i.postimg.cc/188HRPPp/8576308f3ed156f01bd9a865c05852e0-removebg-preview-2.png"
            alt=""
          />
        </Box>
      </Link>

      <div className="contentdivs">
        <div onClick={handelclick}><Link to={'/'}><p>Projects </p></Link></div>
        <div className="big"><Link to={'/information'}>Information</Link></div>
        <div><Link to={'/contact'}>Contact</Link></div>
      </div>



    </div>
  );
}
