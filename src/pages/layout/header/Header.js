import React, { useRef } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import Theme from "../../../styles/Theme";
import S from "./styles";

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
    <S.Header id="header" className="header">
      <p className="header-logo">
        <Link to="/">
          <img src="images/logo/logo.svg" />
        </Link>
      </p>
      <S.Nav className="header-menu" style={{ fontSize: Theme.fontSize.h2 }}>
        
          <NavLink to="/calendar" activeStyle={{ color: Theme.colors.purple }}>
            CALENDAR
            {/* <p ref={(element)=>letterRef.current[0]=element}>
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
            </p> */}
          </NavLink>
    
   
          <NavLink
            to="/intro"
            className="intro"
            style={matchIntrorPage ? { color: Theme.colors.green } : {}}
          >
            INTRO
          </NavLink>

          <NavLink
            to="/memo"
            style={matchMemoPage ? { color: Theme.colors.red } : {}}
          >
            MEMO
            {/* <p >
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
            </p> */}
            
          </NavLink>
   
      </S.Nav>
    </S.Header>
  );
};

export default Header;
