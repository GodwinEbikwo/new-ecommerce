import { useState, useEffect } from 'react';

export default function useForm(initial = {}) {
  // create state objects for our inputs
  const [inputs, setInputs] = useState(initial);

  // create an array of our inputs and makes it a string
  const initialValues = Object.values(initial).join('');

  // run when our inputs on the form changes
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    // deconstruct e.target to get it's properties
    let { value, name, type } = e.target;

    // check of the type is equal to a number and parse it to remove strings
    if (type === 'number') {
      value = parseInt(value);
    }

    // handle file uploads
    if (type === 'file') {
      // you can add another property in the destruct i.e secong Image file
      [value] = e.target.files;
    }
    setInputs({
      // this deal with multiple states in our form hence we put it in an object and copy multiple states
      ...inputs,
      [name]: value,
    });
  }

  // resets to initial state not empty state
  function resetForm() {
    setInputs(initial);
  }

  // resets to empty values in the form
  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  }

  return { inputs, handleChange, resetForm, clearForm };
}
