import React, { useRef, useState } from 'react';
import './infoComponent.scss'
import Theme from '../../../styles/Theme';
const InfoComponent = () => {

const buttonRef = useRef([])
const [info,setInfo] = useState()

// for(let button of buttonRef.current){
//   button
// }
const gitInfo = (
<span>
https://github.com/munmimi
  </span>

)
const contactInfo = (
<span>
m_mimi@naver.com<br/>
mun.mimi925@gmail.com
  </span>

)
const nameInfo = (
<span className="name">
MUN JIEUN
  </span>
)
const onClickButtons =(e)=>{
 
  console.log( e)
  if(e.target.innerHTML === "GitHub"){
    setInfo(gitInfo)

  }else if (e.target.innerHTML === "Name"){
    setInfo(nameInfo)

  }else if(e.target.innerHTML === "Contact"){
setInfo(contactInfo)
  } 
}
  return (
    <div className='info_wrap' style={{color:Theme.colors.grey}}>
      <div className='btn_wrap' style={{fontSize:Theme.fontSize.h3}}>
        <button onClick={onClickButtons}>GitHub</button>
        <button onClick={onClickButtons}>Name</button>
        <button onClick={onClickButtons}>Contact</button>
      </div>
      <div className='info_inner'>
        <i/>
        <p style={{fontSize:Theme.fontSize.h3,color:Theme.colors.grey}}>
        {info}
        </p>
          
      </div>
      <mark style={{fontSize:Theme.fontSize.small}}>Seoul, South Korea</mark>
    </div>
  );
};

export default InfoComponent;