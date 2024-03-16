import React, { useRef, useState } from "react";
// import './infoComponent.scss'
import Theme from "../../../styles/Theme";
import S from "./styles";
const InfoComponent = () => {
  const buttonRef = useRef([]);
  const [info, setInfo] = useState();

  // for(let button of buttonRef.current){
  //   button
  // }
  const gitInfo = <span>https://github.com/munmimi</span>;
  const contactInfo = (
    <span>
      m_mimi@naver.com
      <br />
      mun.mimi925@gmail.com
    </span>
  );
  const nameInfo = <span className="name">MUN JIEUN</span>;
  const onClickButtons = (e) => {
    console.log(e);
    if (e.target.innerHTML === "GitHub") {
      setInfo(gitInfo);
    } else if (e.target.innerHTML === "Name") {
      setInfo(nameInfo);
    } else if (e.target.innerHTML === "Contact") {
      setInfo(contactInfo);
    }
  };
  return (
    <S.Div className="info_wrap" style={{ color: Theme.colors.grey }}>
      <button onClick={onClickButtons}>
        <sapn>GitHub</sapn>
        <p>
          <span>Check out my Github<a href="#none">https://github.com/munmimi</a></span>
        </p>
      </button>
      <button onClick={onClickButtons}>
        <span>Name</span>
        <p>
          <span>A newcomer Developer, munjieun</span>
          <span>Passionate about Design& Development</span>
          <span>Becoming an Artistic Developer</span>
        </p>
      </button>
      <button className="is-active" onClick={onClickButtons}>
        <span>Contact</span>
        <p>
          <span>Contact with Google<a href="#none">mun.mimi925@gmail.com</a></span>
          <span>Contact with Naver<a href="#none">m_mimi@naver.com</a></span>
        </p>
      </button>
    </S.Div>
  );
};

export default InfoComponent;
