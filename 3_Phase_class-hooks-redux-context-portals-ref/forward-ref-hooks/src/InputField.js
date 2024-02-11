import React from 'react';

const InputField = React.forwardRef((props, ref) => {
  return (
    <div>
        <h1>{props.getName}</h1>
      <input id='input' type='text' ref={ref} />
    </div>
  );
});

export default InputField;
