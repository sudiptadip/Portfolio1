import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Showcase.css";

export default function Cricbuzz() {
  let obj = {
    id: 2,
    image: `https://images.hindustantimes.com/img/2022/08/06/1600x900/india-women-cricket-cwg-getty_1659798187705_1659798191354_1659798191354.jpg`,
    title: `Cricbuzz`,
    t1: `Cricbuzz is an Indian cricket news website owned by Times Internet.`,
    t2: ` Developed along with a team of 4 member In a week`,
    t3: `My task in this collaborative project was to recent cricket news show on this website and ranking part. We buid this website using javascript.`,
    img1: `https://www.cricbuzz.com/a/img/v1/650x0/i1/c240072/kyle-mayers-registered-his-sec.jpg`,
    img2: `https://www.cricbuzz.com/a/img/v1/650x0/i1/c240086/after-rohit-sharma-retired-hur.jpg`,
    img3: `https://www.cricbuzz.com/a/img/v1/650x0/i1/c236804/once-play-resumed-potts-struc.jpg`,
    img4: `https://www.cricket.com.au/~/-/media/News/2017/12/29lanningperry1.ashx?w=1600`,
    img5: `https://www.cricbuzz.com/a/img/v1/650x0/i1/c238337/reece-topley-picked-up-two-cru.jpg`,
    git: `https://github.com/VijaySingh8650/cricbuzz.git`,
    link: `https://luxury-douhua-2f73cb.netlify.app/video.html`,
  };
  return (
    <div style={{ backgroundColor: "#FFFFF0" }}>
      <div>
        <Navbar />
      </div>
      <div className="first_head">
        <div>
          
          <p>{obj.t1}</p>{" "}
        </div>
      </div>

      <div className="link">
        <div>
          <a target={"blank"} href={obj.git}>
            Git-Hub --> Click
          </a>
        </div>
        <div>
          <a target={"blank"} href={obj.link}>
            Deploy-Link --> Click
          </a>
        </div>
      </div>

      <div className="Firstimg">
        <img src={obj.image} alt="" />
      </div>

      <div className="second_head">
        <div className="child1_second_head">
          <p>Overview</p>
        </div>
        <div className="child2_second_head">
          <p>{obj.t2}</p>
        </div>
      </div>

      <div className="secondimg">
        <img src={obj.img1} alt="" />
      </div>

      <div className="third_head">
        <div className="child1_third_head"></div>
        <div className="child2_third_head">
          <p>{obj.t3}</p>
        </div>
      </div>

      <div className="thirdimg">
        <img src={obj.img2} alt="" />
      </div>

      <div className="fourthimg">
        <img src={obj.img3} alt="" />
      </div>

      <div className="fourth_head">
        <div className="child1_fourth_head"></div>
        <div className="child2_fourth_head">
          <p>{obj.t4}</p>
        </div>
      </div>

      <div className="fifthimg">
        <img src={obj.img4} alt="" />
      </div>

      <div className="sixthimg">
        <img src={obj.img5} alt="" />
      </div>

      <Footer />
    </div>
  );
}
