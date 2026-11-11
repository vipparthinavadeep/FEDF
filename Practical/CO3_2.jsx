import React from 'react';

export default function CO3_2() {
  
  const handleClick = () => alert("JSX uses camelCase for events!");

  return (
    <div className="lesson-container"> 
      
      <h1>Lesson 3.2: Understanding JSX</h1>
      
      <br /> 

      <button onClick={handleClick}>Click Me (camelCase)</button>

      <div style={{ marginTop: '20px' }}>
        <label htmlFor="studentInput">User ID: </label>
        {/* Rule: Use htmlFor instead of for  */}
        
        <input id="studentInput" type="text" placeholder="Self-closing input" />
      </div>

      <p>
        Note: Browsers do not understand JSX directly; 
        it is converted by tools like Babel.
      </p>
    </div>
  );
}