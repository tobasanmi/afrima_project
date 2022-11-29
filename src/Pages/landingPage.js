import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../images/CANEX1.png";
import image2 from "../images/CANEX2.png";
import image3 from "../images/landingImage1.png";

export default function LandingPage() {
  return (
    <div className="landinpageWrapper">
      <div className="landingPage">
        <div className="iconWrapper">
          <div className="pipeTop">|</div>
          <ul>
            <li className="iconList"><i className='fa fa-twitter'></i></li>
            <li className="iconList"><i className='fa fa-facebook'></i></li>
            <li className="iconList"><i className='fa fa-instagram'></i></li>
            <li className="iconList"><i className='fa fa-linkedin'></i></li>
            <li className="iconList"><i className='fa fa-youtube'></i></li>
          </ul>
          <div className="pipeBottom">|</div>
        </div>
        <div className="wordingsWrapper">
          <h1 className="landingPageWordingsHeader">
            CREATIVE AFRICA NEXUS (CAREX) <span>WKND</span>
            25-27 NOVEMBER 2022
          </h1>
          <h3>Senegal</h3>
          <button type="button" className="btn btn-info registerButton">Register Now</button>
        </div>
      </div>
    </div>
  );
}
