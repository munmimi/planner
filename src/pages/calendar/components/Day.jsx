import React, { useEffect, useRef, useState } from "react";
import calendarData from "../../../datas/calendarData";

const Day = (props) => {
  // const [dates, setDates] = useState([]);
  // const [memos, setMemos] = useState([]);
  // const dateData = {
  //   year: props.year,
  //   month: props.month,
  //   date: props.date,
  // };
  
  // useEffect(() => {
  //   setMemos(calendarData);
  //   setDates(prevDates => [...prevDates, dateData]); // 이전 상태 값을 사용하여 새로운 상태 값을 생성
  // }, []);
  
  // console.log("dates:", dates);
  // console.log("dateData:", dateData);

  return (
    <div
      className={
        props.condition ? props.condition + " calendar-date" : "calendar-date"
      }
    >
      <p className="date_num">{props.date}</p>
      <ul className="todo_list">
        <li className="todo_list-item">메모메모메모모</li>
        {
          // dates.map((date,i)=>{
          //   return <li className="todo_list-item">{date}</li>;
          // })
          // memos.map(memo=>{
          //   const memoDate = memo.date
          //   // const isMatchingDate = dates.find(date => (
          //   //   date.year === memoDate.year &&
          //   //   date.month === memoDate.month &&
          //   //   date.date === memoDate.date
          //   // ));
          //   // const isMatchingDate = true;
          //   if (isMatchingDate) {
          //     return <li className="todo_list-item">메모메모메모모</li>;
          //   } else {
          //     return null; // 혹은 원하는 다른 요소
          //   }
      
          // })

        }
      </ul>
    </div>
  );
};

export default Day;
