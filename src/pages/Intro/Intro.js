import React from "react";
import Profile from "./components/Profile";
import SkillsSprits from "./components/SkillsSprits";

import './intro.scss'
import Canvas from "./components/Canvas";
import Accordian from "./components/Accordian";

const Intro = () => {
  return (
    <div className="intro-wrap">
      <Profile />
      <SkillsSprits/>
      <Canvas/>
      <Accordian/>
    </div>
  );
};

export default Intro;
