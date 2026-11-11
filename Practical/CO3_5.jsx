import React from 'react';

// 1. CHILD COMPONENT: Receives a function as a prop
// This demonstrates "Passing Event Handlers as Props"
function ActionButton({ onTrigger, label }) {
  return (
    <button onClick={onTrigger} style={{ margin: '5px' }}>
      {label}
    </button>
  );
}

export default function CO3_5() {
  // 2. Event Handler using an Arrow Function
  // Arrow functions automatically bind 'this' and simplify code
  const handleSimpleClick = () => {
    alert("Button clicked! (Normal Event)");
  };

  // 3. Using the Event Object
  // React automatically passes a synthetic event object
  const handleEventDetails = (event) => {
    console.log("Event Type:", event.type);     // e.g., 'click'
    console.log("Target Element:", event.target); // The button itself
    alert(`Triggered a ${event.type} event! Check console for details.`);
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>Lesson 3.5: Handling Events</h1>

      {/* Basic Event Listener */}
      <section style={{ marginBottom: '20px' }}>
        <h3>1. Direct Event Listener</h3>
        <button onClick={handleSimpleClick}>Click Me</button>
      </section>

      {/* Passing functions to Children */}
      <section style={{ marginBottom: '20px' }}>
        <h3>2. Passing Handlers as Props</h3>
        <p>The buttons below are Child components triggering Parent logic:</p>
        <ActionButton label="Child Alert" onTrigger={handleSimpleClick} />
        <ActionButton label="Show Event Data" onTrigger={handleEventDetails} />
      </section>

      <div style={{ marginTop: '20px', fontSize: '0.85rem', color: '#555' }}>
        <i>Note: React event names like 'onClick' use camelCase.</i>
      </div>
    </div>
  );
}