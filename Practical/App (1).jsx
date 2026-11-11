// App.jsx
import React from 'react';
import CO3_1 from './CO3_1'; // Import your lesson
import CO3_2 from './CO3_2'; // Import your lesson
import CO3_3 from './CO3_3'; // Import your lesson
import CO3_4 from './CO3_4'; // Import your lesson
import CO3_5 from './CO3_5'; // Import your lesson
import CO3_51 from './CO3_51'; // Import your lesson
import CO3_6 from './CO3_6'; // Import your lesson
import CO3_61 from './CO3_61'; // Import your lesson
import CO3_62 from './CO3_62'; // Import your lesson
import CO3_7 from './CO3_7'; // Import your lesson


export default function App() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px', 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' 
    }}>
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '30px' }}>
        <h1 style={{ color: '#2563eb' }}>KLU Front-End Engineering</h1>
        <p>Current Module: <b>CO-3 (React Fundamentals)</b></p>
      </header>

      <main>
        {/* You can comment/uncomment lessons as you teach them */}
        <CO3_1 />
        
        {/* Future lessons will go here: */}
        {/* <CO3_X /> */}
      </main>
      
      <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#999' }}>
        React Library: Build UIs with Components.
      </footer>
    </div>
  );
}