import React, { useState } from 'react';

const AccordianList = ({title}) => {
  const [isOpen,setIsOpen] =useState(false)
  const onClickLi = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <li className={isOpen? "is-active":""} onClick={onClickLi}>
      <h3>{title}</h3>
      <span className='img'></span>
    </li>
  );
};

export default AccordianList;