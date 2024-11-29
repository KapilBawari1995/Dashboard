import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BillableHoursMetrics = ({setdata}) => {
  const percentage = setdata; 

  return (
    <div style={{ width: 200, height: 150, margin: '0 auto' }}> 
      <h3 style={{ textAlign: 'left', fontWeight: 'bold', color: '#333', fontSize:"13px" }}>Billable Hours Metrics</h3>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={3}
        styles={buildStyles({
      
          pathColor: '#33CC33', 
          textColor: '#33CC33', 
          trailColor: '#e0e0e0',
          textSize: '18px', 
        })}
      />
      <div style={{ textAlign: 'center', color: '#33CC33', marginTop: '5px' }}>
        <p style={{ fontSize: '14px' }}>5h avg</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#33CC33', borderRadius: '50%', marginRight: '5px' }}></span>
          <span style={{ fontSize: '12px', color: '#333' }}>Utilization Rate</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '50%', marginRight: '5px' }}></span>
          <span style={{ fontSize: '12px', color: '#888' }}>Total requirements</span>
        </div>
      </div>
    </div>
  );
};

export default BillableHoursMetrics;
