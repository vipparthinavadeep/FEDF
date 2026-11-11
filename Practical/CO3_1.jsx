import React from 'react';

/** * 1. CHILD COMPONENT: WelcomeBanner
 * This is a function that defines what should appear on the screen[cite: 3].
 * It receives 'props' as an object to display dynamic data[cite: 17, 18].
 */
function WelcomeBanner(props) {
  return (
    <div style={{ 
      padding: '15px', 
      backgroundColor: '#f1f5f9', 
      borderRadius: '12px', 
      border: '1px solid #cbd5e1' 
    }}>
      {/* Accessing data passed from parent  */}
      <h2 style={{ color: '#1e293b' }}>Welcome to {props.storeName}!</h2>
      <p style={{ color: '#475569' }}>You have <b>{props.cartCount}</b> items in your bag.</p>
    </div>
  );
}

/**
 * 2. PARENT COMPONENT: CO3_1
 * Demonstrates Unidirectional Data Flow [cite: 14]
 */
export default function CO3_1() {
  // These variables act as the data source
  const shopName = "KLU Section-11 - React Store Items";
  const itemsInCart = 8;

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '10px' }}>
      <h1 style={{ color: '#2563eb' }}>React Core Concepts</h1>
      
      <p>React is a JavaScript library used to build user interfaces using components[cite: 2, 3].</p>
      
      {/* Data flows in a single direction—from parent to child—via props  */}
      <WelcomeBanner 
        storeName={shopName} 
        cartCount={itemsInCart} 
      />

      <div style={{ 
        marginTop: '25px', 
        padding: '10px', 
        fontSize: '0.85rem', 
        backgroundColor: '#fffbeb', 
        borderLeft: '4px solid #f59e0b' 
      }}>
        <strong>Engineering Note (Virtual DOM):</strong> 
        When data changes, React updates only the necessary parts of the webpage 
        instead of reloading the entire page. This keeps applications 
        fast and responsive
      </div>
    </div>
  );
}