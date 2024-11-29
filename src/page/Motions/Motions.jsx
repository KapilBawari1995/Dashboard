import React from 'react';
import labelsName from '../../Json/formLabelsName.json';
import patientData from '../../Json/userData.json';
import Datatable from '../../utility/Datatable';


function Motions() {
    return (
      
                    <Datatable
                labelsName={labelsName.patientlabes}  
                data={patientData.patientData}         
                modalTitle="Edit Patient Data"        
                formData={patientData.patientData}     
            />
                 
   
       
    );
}

export default Motions;
