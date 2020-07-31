import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Input, Label } from './style';

function FormField({
  as, label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={as}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>

  );
}

FormField.defaultProps = {
  as: 'input',
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,

};

export default FormField;
