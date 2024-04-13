import React from "react";
import Profile from "./components/Profile";
import SkillsSprits from "./components/SkillsSprits";

import './intro.scss'

const Intro = () => {
  return (
    <div className="intro-wrap">
      <Profile />
      <SkillsSprits/>
    </div>
  );
};

export default Intro;
