import React, { useState, useEffect } from 'react';

export default function CO3_62() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. MOUNTING: This starts the timer as soon as the page loads. 
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1); // 2. UPDATING: The screen changes every second. 
    }, 1000);

    // 3. UNMOUNTING: This is the "Cleanup." [cite: 3]
    // Like "turning off the stove when you finish cooking." [cite: 3]
    return () => {
      clearInterval(timer); // Stops the timer to save memory. [cite: 3]
      console.log("Timer Stopped and Cleaned up!");
    };
  }, []); // [] means: "Start once at the beginning." [cite: 3]

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '2px solid #3b82f6' }}>
      <h3>Lesson 3.6: The Stopwatch Example</h3>
      <p style={{ fontSize: '2rem' }}>Time Elapsed: <b>{seconds}s</b></p>
      
      <div style={{ backgroundColor: '#f0f9ff', padding: '10px', marginTop: '10px' }}>
        <p><b>Phase 1:</b> The timer started (Mounted).</p>
        <p><b>Phase 2:</b> You see the seconds change (Updating).</p>
        <p><b>Phase 3:</b> If we left this page, the timer would stop (Unmounting).</p>
      </div>
    </div>
  );
}