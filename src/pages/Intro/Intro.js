import React, { useRef, useState } from "react";
import Theme from "../../styles/Theme";
import SpiritsSwiper from "./components/SpiritsSwiper";
import InfoComponent from "./components/InfoComponent";

import "./intro.scss";


const Intro = () => {
  
  return (
    <section className="container" style={{ color: Theme.colors.grey }}>
      <div className="top">
        
          <InfoComponent/>
     
        <div className="top-r">
          <img src="/images/profile.png"/>
        </div>
      </div>
      <div className="bot">
        <div className="bot-l">
          <div className="bot-l-t">
            <h2 style={{ fontSize: Theme.fontSize.h2 }}>Skills</h2>
            <p className="bot-l-btns" style={{ fontSize: Theme.fontSize.body }}>
              <button>starter</button>
              <button>skilled</button>
            </p>
          </div>
          <div></div>
        </div>
        <p className="bot-m" style={{ fontSize: Theme.fontSize.h2 }}>
          <span>Sprits</span>
        </p>
        <div className="bot-r">
         <SpiritsSwiper/>
        </div>
      </div>
    </section>
  );
};

export default Intro;
