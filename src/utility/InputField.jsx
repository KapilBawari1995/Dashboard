import React from 'react';
import { initMDB } from 'mdb-ui-kit';  // Import initMDB to initialize MDB components

const InputField = ({ label, name, type = "text", value, onChange, required = false }) => {
  
  // Initialize MDB components when the component mounts
  
    initMDB();  // Initialize all MDB components globally (floating label, etc.)


  return (
    <div className="form-outline " data-mdb-input-init>
      <input
        type={type}
        className="form-control"
        id={formControlLg}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={formControlLg} className="form-label">{label}</label>
    </div>
  );
};



export default InputField;
