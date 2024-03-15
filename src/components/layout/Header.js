import React, { useRef } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import "./header.scss";
import Theme from "../../styles/Theme";
import Menu from "./Styles";

const Header = (style) => {
  const matchCalendarPage = useMatch("/Calendar");
  const matchIntrorPage = useMatch("/Intro");
  const matchMemoPage = useMatch("/Memo");

const letterRef = useRef([]);

const letterAni = ()=>{
  letterRef.current.forEach((element, i) => {
    element.style.top = -100 + "%";
    element.style.transitionDelay = 0.05 * i + 's';
   
  });

}
const letterAniReset = ()=>{
  setTimeout(() => {
    letterRef.current.forEach((element, i) => {
      element.style.top = 0 + "%";
      element.style.transitionDelay = 0.05 * i + 's';
    });
  }, letterRef.current.length * 50); 
 
}


// redux로 수정!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <header id="header" className="header">
      <p className="header-logo">
        <Link to="/">
          <img src="images/logo/Planner.svg" />
        </Link>
      </p>
      <ul className="header-menu" style={{ fontSize: Theme.fontSize.h2 }}>
        <Menu onMouseEnter={letterAni} onMouseLeave={letterAniReset}>
          <Link to="/" activeStyle={{ color: Theme.colors.purple }}>
            <p ref={(element)=>letterRef.current[0]=element}>
              <span>C</span>
              <span>C</span>
            </p>
            <p ref={(element)=>letterRef.current[1]=element}>
              <span>a</span>
              <span>a</span>
            </p>
            <p ref={(element)=>letterRef.current[2]=element}>
              <span>l</span>
              <span>l</span>
            </p>
            <p ref={(element)=>letterRef.current[3]=element}>
              <span>e</span>
              <span>e</span>
            </p>
            <p ref={(element)=>letterRef.current[4]=element}>
              <span>n</span>
              <span>n</span>
            </p>
            <p ref={(element)=>letterRef.current[5]=element}>
              <span>d</span>
              <span>d</span>
            </p>
            <p ref={(element)=>letterRef.current[6]=element}>
              <span>a</span>
              <span>a</span>
            </p>
            <p ref={(element)=>letterRef.current[7]=element}>
              <span>r</span>
              <span>r</span>
            </p>
          </Link>
        </Menu>
        <Menu fontStyleValue="italic">
          <Link
            to="/Intro"
            style={matchIntrorPage ? { color: Theme.colors.green } : {}}
          >
            Intro
          </Link>
        </Menu>
        <Menu>
          <Link
            to="/Memo"
            style={matchMemoPage ? { color: Theme.colors.red } : {}}
          >
            <p >
              <span>M</span>
              <span>M</span>
            </p>
            <p>
              <span>e</span>
              <span>e</span>
            </p>
            <p>
              <span>m</span>
              <span>m</span>
            </p>
            <p>
              <span>o</span>
              <span>o</span>
            </p>
            
          </Link>
        </Menu>
      </ul>
    </header>
  );
};

export default Header;
