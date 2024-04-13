import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Calendar from "../../calendar/Calendar";
import Intro from "../../Intro/Intro";
import Memo from "../../memo/Memo";
import H from "./style";
import Main from "../../main/Main";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef([])

  const onClickMenuBtn = ()=>{
    setIsOpen(!isOpen)
  }
  const [isHover,setIsHover] = useState(false)
  const onMouseEnterLi = ()=>{
    setIsHover(true)

  }
  const onMouseLeaveLi = ()=>{
    setIsHover(false)

  }

  return (
    <H.Header>
      <H.Logo>
        <NavLink to={'/'} element={<Main/>}></NavLink>
      </H.Logo>
      <H.Button className={isOpen?"is-x":""} onClick={()=>onClickMenuBtn()} ref={(element)=> menuRef.current[0] = element}>
        <span className="path"></span>
        <span className="path"></span>
      </H.Button>
      <H.Nav className={isOpen?"is-active":""} ref={(element)=> menuRef.current[1] = element}>
        <ul>
          <li className={isHover?"is-active":""}>
            <span className="layer"></span>

            <NavLink to={'/Calendar'} element={<Calendar/>} onMouseEnter={onMouseEnterLi} onMouseLeave={onMouseLeaveLi}>CALENDAR
            </NavLink>

          </li>
          <li>
            <NavLink to={'/Intro'} element={<Intro/>}>INTRO</NavLink>
          </li>
          <li>
            <NavLink to={'/Memo'} element={<Memo/>}>MEMO</NavLink>
          </li>
          <li className="mark">
            <i></i>
          </li>
        </ul>
      </H.Nav>
    </H.Header>
  );
};

export default Header;
