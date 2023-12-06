import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const Home = () => {
   const {userInfo} = useUser();
   const navigate = useNavigate();



   
   const connectNow =()=>{
    navigate("/contact");
   }
const  learnMore = ()=>{
  navigate("/about");
}

  return (
    <>
      <div className="hero-container">
        <div className="first">
          <div>
            <p id="home-user-name">
              {userInfo && `Hello ${userInfo.username.split(" ")[0]},`}
            </p>
            <p id="para">"We are the best IT company"</p>
            <h1>
              Welcome to Tech<span className="title">Hub</span>
            </h1>
            <p id="para2">
              "TechHub is a dynamic IT company, specializing in innovative
              solutions and collaborative approaches. We excel in cutting-edge
              technologies, providing transformative services for digital
              success and growth."
            </p>
          </div>
          <div className="button-home">
            <button className="btn" onClick={connectNow}>
              Connect now
            </button>
            <button className="btn" id="btn2" onClick={learnMore}>
              Learn more
            </button>
          </div>
        </div>
        <div className="second">
          <img
            src="/images/home.png"
            alt="regisration image"
            width={500}
            height={450}
          />{" "}
        </div>
      </div>
      <div className="second-hero">
        <div>
          <h2>500+</h2>
          <p>Registered companies</p>
        </div>
        <div>
          {" "}
          <h2>100,00+</h2>
          <p>Happy clients</p>
        </div>
        <div>
          {" "}
          <h2>500+</h2>
          <p>Well Known Developers</p>
        </div>
        <div>
          {" "}
          <h2>24/7</h2>
          <p> Services</p>
        </div>
      </div>
      <div className="hero-container" id="below-main">
        <div className="second">
          <img
            src="/images/design.png"
            alt="regisration image"
            width={500}
            height={450}
          />{" "}
        </div>
        <div className="first">
          <div>
            <p id="para">"We are here to help you "</p>
            <h1>Get Started Today</h1>
            <p id="para2">
              "TechHub is a dynamic IT company, specializing in innovative
              solutions and collaborative approaches. We excel in cutting-edge
              technologies, providing transformative services for digital
              success and growth."
            </p>
          </div>
          <div className="button-home">
            <button className="btn" onClick={connectNow}>
              Connect now
            </button>
            <button className="btn" id="btn2" onClick={learnMore}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
