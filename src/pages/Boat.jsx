import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./Showcase.css";


export default function Boat() {
    let obj = {
        id: 1,
        image: `https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Earphone_cf76a9b7-42c7-4e2b-83cc-996042e6fd3c.jpg?v=1616771185&width=1500`,
        t1: `BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.`,
        t2: `I build this website using react. in this website I create only Front End part`,
        t3: `-  Developed this website in one week`,
        img1: `https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/whatsapp_2.jpg?v=1659706408&width=1500`,
        img2: `https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683`,
        img3: `https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/sd.jpg?v=1659088152&width=1500`,
        img5: `https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads-_Catgry_web.jpg?v=1634717143`,
        img4: `https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/blog.jpg?v=1654260672&width=1500`,
        git: `https://github.com/sudiptadip/sudipta-boat-lush-lace-9782.git`,
        link: `https://dapper-melomakarona-2fdcba.netlify.app/`,
      }
    return (
        <div style={{ backgroundColor: "#FFFFF0" }}>
          <div>
            <Navbar />
          </div>
          <div className="first_head">
            <div>
              {" "}
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
                {" "}
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

