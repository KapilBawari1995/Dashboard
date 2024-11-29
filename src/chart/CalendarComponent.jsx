import React from 'react';
import { motion } from "framer-motion";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './CalendarComponent.css'
const CalendarComponent = ({ setDate, date, selectRange }) => {


  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 2);
  };

  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      
    >
   
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={selectRange}
           
          
            renderHeader={({ date }) => (
         
                <span>{formatShortMonthYear('en-US', date)}</span>
             
            )}
            formatShortWeekday={formatShortWeekday}
          />
       
    </motion.div>
  );
};

export default CalendarComponent;
