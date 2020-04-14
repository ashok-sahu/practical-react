import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactCalander = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div style={{border:'none'}}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        // minDate={new Date()}
        // maxDate={new Date()}
        dateFormat='dd/MM/yyyy'
        filterDate={date => (date.getDate() !== 6 && date.getDate() !== 0)}
        isClearable={true}
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
};

export default ReactCalander;
