import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../Calendar/Clanederfull.css'

const FullCalendarComponent = () => {
  return (
    <div id="calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: 'prev,title,next',  
          center: '',               
          right: '',               
        }}
        
      />
    </div>
  );
};

export default FullCalendarComponent;
