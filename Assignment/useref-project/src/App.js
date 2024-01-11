import React, { useRef, useState } from 'react';
export default function App() {
 const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputRefs = [firstNameRef, lastNameRef, emailRef, passwordRef];

    // Simulate validation checks and mark fields with errors
    inputRefs.forEach((ref) => {
      const inputElement = ref.current;
      if (inputElement.value === '') {
        inputElement.classList.add('error');
      } else {
        inputElement.classList.remove('error');
      }
    });

    // Find the first input field with an error and set focus
    const firstErrorField = inputRefs.find((ref) => ref.current.classList.contains('error'));
    if (firstErrorField) {
      firstErrorField.current.focus();
    }
  };

  return (
    <div className="App">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <input type="text" ref={firstNameRef} />
        </label><br/>
        <label>
          Last Name: <input type="text" ref={lastNameRef} />
        </label><br/>
        <label>
          Email: <input type="email" ref={emailRef} />
        </label><br/>
        <label>
          Password: <input type="password" ref={passwordRef} />
        </label><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }
  