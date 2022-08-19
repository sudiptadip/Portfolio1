import React from 'react'
import Navbar from "../components/Navbar";
import "./Information.css";
import './Contact.css'
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div style={{backgroundColor: '#d4e1de',}}>
       <Navbar />

       <div style={{ display: "flex" }}>
        <div className="avter">
          <img
            src="https://i.postimg.cc/Ffsf5QbD/Photokako-deep-blue-FOhb1pw-NK2-Yg1-D91.jpg"
            alt=""
          />
        </div>
      </div>

     <div>
        <div className='cname'>
          Name:- Sudipta Bhattacharjee
        </div>
        <div className='ctitle'>
        Full Stack Web Developer
        </div>
     </div>
     <div className='ccontactdet'>
      <div>
        Mobile / Whatsapp :- 9073777793
      </div>
      <div>
        Email :- sudiptabhattacharjee000@gmail.com
      </div>
      <div>
        Git :- <a target={'blank'} href="https://github.com/sudiptadip">https://github.com/sudiptadip</a>
      </div>
      <div>
        Linkdin :- <a target={'blank'} href="https://www.linkedin.com/in/sudipta-bhattacharjee-60a89122a/">https://www.linkedin.com/in/sudipta-bhattacharjee-60a89122a/</a>
      </div>
     </div>
     <div className='cspace'>

     </div>
    <Footer />
    </div>
  )
}