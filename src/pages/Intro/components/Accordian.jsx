import React, { useEffect, useState } from "react";
import AccordianList from "./AccordianList";

const Accordian = () => {
  const [list, setList] = useState([]);

  const listLength = 30;
  useEffect(() => {
    setList(prevList => {
      const newList = [];
      for (let i = 0; i < listLength; i++) {
        newList.push({
          title: i,
          imgSrc: "",
        });
      }
      return [ ...newList];
    });



  }, []);

  return (
    <div className="intro-accordian">
      <ul className="intro-accordian-list">
        {list.map((li,i)=>{
          return <AccordianList key={i} title={li.title} />
        })}
       
      </ul>
      <h2>Projects</h2>
    </div>
  );
};

export default Accordian;
