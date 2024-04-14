import React from "react";
import SpiritSwiper from "./SpiritSwiper";

const SkillsSprits = () => {
  return (
    <div className="intro-sksp">
      <div className="intro-sksp-sk">
        <h2>Skills

          {/* <p className="btn_wrap">
            <button></button>
          </p> */}
        </h2>
        <div className="skills_box"></div>
      </div>
      <div className="intro-sksp-sp">
        <h2><span>Sprits</span></h2>
          <SpiritSwiper/>
      </div>
    </div>
  );
};

export default SkillsSprits;
