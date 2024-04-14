import React, { useState } from "react";
import "./calendar.scss";
import Day from "./components/Day";
import AddModal from "./components/AddModal";
import MemoDetailBox from "./components/MemoDetailBox";
import DeleteModal from "./components/DeleteModal";

const Calendar = () => {
  const date = new Date();
  const getMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months[date.getMonth()];
  };
  const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth(); 

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate+1).keys()].slice(1);
    const nextDates = [];
    
    if (PLDate !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
      }
    }
    for (let i = 1; i < 7 - TLDay; i++) {
      nextDates.push(i);
    }
    const dates = prevDates.concat(thisDates, nextDates);

    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);

    return {
      dates,
      firstDateIndex,
      lastDateIndex,
      viewYear,
      viewMonth: viewMonth+1,
    };
  };
  const { dates, firstDateIndex, lastDateIndex, viewYear, viewMonth } = renderCalendar();


  // 
  const [addActive,setAddActive] = useState(false)
  const [delActive,setDelActive] = useState(false)
  const onClickAddBtn = ()=>{
    setAddActive(!addActive)
    if (delActive){
      setDelActive(false)
    }
  }
  const onClickDelBtn = ()=>{
    setDelActive(!delActive)
    if (addActive){
      setAddActive(false)
    }
  }
  return (
    <div className="calendar-wrap">
      <div className="calendar-inner">
        <div className="calendar-head">
          <p className="day">Sun</p>
          <p className="day">Mon</p>
          <p className="day">Tue</p>
          <p className="day">Wed</p>
          <p className="day">Thu</p>
          <p className="day">Fri</p>
          <p className="day">Sat</p>
        </div>
        <div className="calendar-body">
          {
          dates.map((date, i) => {
            const condition =
              i >= firstDateIndex && i < lastDateIndex + 1 ? null : "other";
            return <Day key={i} condition={condition} date={date} year={viewYear} month={viewMonth}/>;
          })}
        </div>
      </div>
      <div className="calendar-info">
        <div className="calendar-info-front">
        <h1 id="month" className="calendar-head">
          {getMonth()}
        </h1>
        <div className="calendar-body">
          <MemoDetailBox/>
          <p className="calendar-btns">
            <button className="memo_add_btn" onClick={onClickAddBtn}><span></span><span></span></button>
            <button className="memo_dek_btn" onClick={onClickDelBtn}><span></span></button>
          </p>
        </div>
        </div>
        
        <AddModal addActive={addActive}/>
        <DeleteModal delActive={delActive}/>
      </div>
    </div>
  );
};

export default Calendar;
