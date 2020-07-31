import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
