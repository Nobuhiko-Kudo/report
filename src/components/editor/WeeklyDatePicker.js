import React, {useState} from 'react'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const WeeklyDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const isWeekday = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      filterDate={isWeekday}
      placeholderText="Select a weekday"
    />
  );
};

export default WeeklyDatePicker