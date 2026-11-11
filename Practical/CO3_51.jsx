import React from 'react';

export default function CO3_51() {
  // Event handler for a Synthetic Mouse Event
  const handleMouseAction = (event) => {
    // React provides a consistent event object regardless of the browser [cite: 456]
    console.log("Event Type:", event.type); 
    console.log("Element coordinates: X=" + event.clientX + " Y=" + event.clientY);
  };

  return (
    <div style={{ padding: '15px' }}>
      <h1>Lesson 3.5: Synthetic Events (Hover Example)</h1>
      
      <div 
        onMouseOver={handleMouseAction} 
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: '#fef3c7',
          border: '2px dashed #d97706',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        Hover over me!
      </div>

      <p style={{ marginTop: '15px', fontSize: '0.9rem' }}>
        Check the <b>Console</b> to see the mouse coordinates captured by 
        React's synthetic event object[cite: 531, 540].
      </p>
    </div>
  );
}