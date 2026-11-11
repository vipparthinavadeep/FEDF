import React, { useState } from 'react'; // [cite: 351]

export default function CO3_4() {
  // 1. Simple State for Counter [cite: 338]
  const [count, setCount] = useState(0);

  // 2. Object State for User Profile [cite: 425]
  const [user, setUser] = useState({ name: 'John', age: 25 });

  // Handler for Counter
  const increment = () => setCount(count + 1);

  // Handlers for User Profile using Spread Operator (...) [cite: 415, 427]
  const handleNameChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
  };

  const handleAgeChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, age: e.target.value }));
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Lesson 3.4: Multiple States in One Component</h3>

      {/* Part A: Counter Section */}
      <section style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
        <h3>1. Counter (Simple State)</h3>
        <p>Current Count: <b>{count}</b></p>
        <button onClick={increment}>Increase Count</button>
      </section>

      {/* Part B: User Profile Section */}
      <section>
        <h3>2. User Profile (Object State)</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input type="text" value={user.name} onChange={handleNameChange} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Age: </label>
          <input type="number" value={user.age} onChange={handleAgeChange} />
        </div>

        <div style={{ marginTop: '15px', backgroundColor: '#f9f9f9', padding: '10px' }}>
          <strong>Live Preview:</strong>
          <p>User: {user.name} | Age: {user.age}</p>
        </div>
      </section>
    </div>
  );
}
onabort