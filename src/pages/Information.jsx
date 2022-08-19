import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Information.css";

export default function Information() {
  return (
    <div style={{ backgroundColor: "#f2e9ff" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div className="avter">
          <img
            src="https://i.postimg.cc/Ffsf5QbD/Photokako-deep-blue-FOhb1pw-NK2-Yg1-D91.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="persolnalData">
        <h1>Name :- Sudipta Bhattacharjee</h1>
        <h1 className="fulstack">(Full Stack Web Developer)</h1>
        <h1>Age :- 21</h1>
        <h1>Address :- Howeah,Westbengal</h1>
        <br />
      </div>
      <div className="perdes">
      A self-motivated, hard-working and ambitious Web Developer with proficiency in Java-script. Problem-solving mindset and the ability to perform well in collaboration, 1300+ hours of coding and hands-on experience in developing 2 fully functional web applications. Looking forward to working as an accountable and competent employee in an exciting tech company.
      </div>
      <div className="Academichead">
      Academic Qualifications
      </div>
      <div className="Higherdiv">
        Higher Secondary
      </div>
      <div className="borddiv">
        West Bengal Board (2018)
      </div>
     <div className="masaifullstack">
        Full Stack Web Development
     </div>
     <dir className='comdate'>
        Masai School (31/10/2022)
     </dir>
     <div className="Keyskilldiv">
        Key Skills
     </div>
     <div className="listskill">
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Github</li>
        <li>React</li>
        <li>Type Script</li>
        <li>Data Structures and Algorithms</li>
     </div>

     <div className="languagesdiv">
        Languages
     </div>

     <div className="languages">
        <li>English</li>
        <div>Limited Working Proficiency</div>
        <li>Hindi</li>
        <div>Full Working Proficiency</div>
        <li>Bengali</li>
        <div>Full Working Proficiency</div>
     </div>

     <div className="softskillsDiv">
        Softskills
     </div>

        <div className="softskills">
            <li>Hard Working</li>
            <li>Time Management</li>
            <li>Team Work</li>
        </div>

    <div className="personalInformation">
        Personal Information
    </div>

    <div className="personaldata">
        <li>Date of Birth:  28/10/2000</li>
        <li>Marital status: Single</li>
        <li>Hobbies & Interests:  -	Photoshop, Cricket, Video Editing</li>
    </div>
    <div className="space">

    </div>

    <Footer/>

    </div>
  );
}
