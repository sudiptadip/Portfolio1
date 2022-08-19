import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./Showcase.css";


export default function Bluefly() {
    let obj = {
      id: 3,
      image: `https://www.incimages.com/uploaded_files/image/1920x1080/getty_663974538_353364.jpg`,
      title: `Bluefly`,
      t1: `Bluefly offers an e-commerce platform that sells designer apparel and accessories, household products and accessories at discounted prices.`,
      t2: ` Developed along with a team of 4 member In a week`,
      t3: `My task in this collaborative project was to jewelry & watches and unde 50 dollar product. We buid this website using javascript.`,
      img1: `https://corporette.com/wp-content/uploads/2021/01/6-Brands-That-Offer-Eco-Friendly-Workwear.jpg`,
      img2: `https://clothingbrands.co/wp-content/uploads/2021/09/TOP-CLOTHING-BRANDS-IN-NEW-ZEALAND-1200x720.jpg`,
      img3: `https://images.freekaamaal.com/post_images/1592542239.png`,
      img4: `https://hercircle.in/hcm/Engage/D/1430E770-A1CA-4651-8640-CD13196E2089.JPG`,
      img5: `https://media.centrepointstores.com/i/centrepoint/CP_Offers_Block02CPS13JAN.jpg`,
      git: `https://github.com/abbas5152/Project-Blueflyclone`,
      link: `https://effervescent-moxie-7cbfe5.netlify.app/s%20j/under50/jpage2`,
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

