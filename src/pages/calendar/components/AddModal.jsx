import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import "./datepickerCustom.scss";

const AddModal = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="calendar-modal calendar-modal_add">
      <p className="top">
        <i></i>
      </p>
      <h2 className="dep date">
        <span>Date</span>
        
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}   dateFormat="yy-MM-dd"/>
      </h2>
      <h2 className="dep">
        <span>Title</span>
        <input type="text" value="강원도 양양에서 서핑"/>
      </h2>
      <h2 className="dep">
        <span>Discription</span>
        <textarea type="text" placeholder="Discription"></textarea>

      </h2>
    </div>
  );
};

export default AddModal;
