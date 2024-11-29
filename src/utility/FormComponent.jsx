import React, { useState } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem
} from 'mdb-react-ui-kit';

function FormComponent({labelsName, data}) {
  const [formValue, setFormValue] = useState({
    labelsName
  });

  const onChange = (e) => {
    setFormValue([ ...formValue.labelsName, {[e.target.key]: e.target.value }]);
  };
  return (
    <div>

<MDBValidation className='row g-3'>
<MDBValidationItem tooltip className='col-md-4'>
  {formValue && formValue.labelsName.map((item)=>(
    <>
    <MDBInput
          value={item.key}
          name={item.displayName}
          onChange={onChange}
          id={item.key}
          required
          label={item.displayName}
          floating
        />
    </>
      ))}
  
      </MDBValidationItem>  
      </MDBValidation>
    </div>
  )
}


export default FormComponent
