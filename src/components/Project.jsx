import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

export default function Project({image,title,des,id,nlink}) {
  return (
    <div key={id}>
      <div className="projectDiv">
      <Link to={`/${nlink}`} >
        <div className="imageDiv">
          <img className="mainimage" src={image} alt="" />
        </div>
        </Link>
        <div className="contentdiv">
        <div className="conhead">
          <p>{title}</p>
        </div>
        <div className="conbody">
          <p>
          {des}
          </p>
        </div>
        </div>

        <div className="textbtn">
          <Link to={`/${nlink}`}>
          View Project ---->
          </Link>
        </div>
      </div>
    </div>
  );
}
