import React from 'react';
import './CO3_7.css'; // Importing a standard CSS file

export default function CO3_7() {
  // 1. Inline Style Object (camelCase)
  const inlineStyle = {
    color: 'blue',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px'
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>Lesson 3.7: Styling in React</h1>

      {/* Method 1: Inline Styles */}
      <section style={{ marginBottom: '15px' }}>
        <h3>1. Inline Style</h3>
        <div style={inlineStyle}>
          This div uses a JavaScript object for styling.
        </div>
      </section>

      {/* Method 2: CSS Stylesheets (External) */}
      <section style={{ marginBottom: '15px' }}>
        <h3>2. CSS Stylesheet</h3>
        <div className="external-box">
          This uses 'className' linked to a .css file.
        </div>
      </section>

      <div style={{ marginTop: '20px', fontSize: '0.85rem', borderLeft: '3px solid green', paddingLeft: '10px' }}>
        <strong>Note for Students:</strong> 
        In React, we use <b>camelCase</b> (backgroundColor) instead of 
        hyphens (background-color) because style is a JavaScript object!
      </div>
    </div>
  );
}