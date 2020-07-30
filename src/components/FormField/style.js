import React from 'react';
import './style.css'

function FormWrapper({ children }){
  return(
    <div className="FormWrapper">
      {children}
    </div>
  )
}

export default FormWrapper;
