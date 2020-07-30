import React from 'react';
import FormWrapper from './style';
import './style.css'

function FormField({ tag, label, type, name, value, onChange}) {
  if(tag === "textarea") {
    return(
      <div>
        <FormWrapper>
          <label>
          {label}:<br/>
            <textarea
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </label>
        </FormWrapper>
      </div>
    )
  } else {
    return (
      <div>
        <FormWrapper>
          <label>
          {label}:<br/>
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </label>
        </FormWrapper>
      </div>
    )
  }
}


export default FormField;
