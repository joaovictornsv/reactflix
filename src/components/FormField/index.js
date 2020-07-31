/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Input, Label } from './style';

function FormField({
  as, label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;

  const hasSuggestions = Boolean(suggestions.length);

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
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>

        { hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => {
              return (
                <option value={suggestion} key={`suggestionFor_${fieldId}option${suggestion}`}>
                  {suggestion}
                </option>
              );
            })}
          </datalist>
        )}

      </Label>
    </FormFieldWrapper>

  );
}

FormField.defaultProps = {
  as: 'input',
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
