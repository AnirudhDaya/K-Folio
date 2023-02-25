import React from "react";
import './Slider.css'
import { socials } from "../../assets/export";

function Slider() {
  return (
    <div className="sliderContainer">
      <div className="socialLogo">
        <div className="socialLogo-track">
          <a href="">
            {socials.map((src, index) => (
              <img src={src.src} alt="socials" className={`socials ${index}`} />
            ))}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
