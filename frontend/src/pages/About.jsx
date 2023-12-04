import React from 'react'

const About = () => {
  return (
    <>
      <div className="hero-container">
        <div className="first">
          <div>
            {/* <p id="para">"We are the best IT company"</p> */}
            <h1>
              Why to choose us?
            </h1>
            <p className='about-para'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet ipsum nisi facilis eaque! Ratione."</p>
            <p className='about-para'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet ipsum nisi facilis eaque! Ratione."</p>
            <p className='about-para'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet ipsum nisi facilis eaque! Ratione."</p>
            <p className='about-para'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet ipsum nisi facilis eaque! Ratione."</p>
            <p className='about-para'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet ipsum nisi facilis eaque! Ratione."</p>
            <p className='about-para'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet ipsum nisi facilis eaque! Ratione."</p>
          </div>
          <div className="button-home">
            <button className="btn">Connect now</button>
            <button className="btn" id="btn2">
              Learn more
            </button>
          </div>
        </div>
        <div className="second">
          <img
            src="/images/about.png"
            alt="regisration image"
            width={500}
            height={450}
          />{" "}
        </div>
      </div>
    </>
  );
}

export default About
