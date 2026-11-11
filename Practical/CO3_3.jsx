import React from 'react';

// 1. Child Component: Now accepting an 'imgUrl' prop
const Profile = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', display: 'flex', gap: '15px' }}>
      {/* Rule: Self-closing tag with '/' and camelCase 'alt' [cite: 50, 51] */}
      <img src={props.imgUrl} alt="User Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      
      <div>
        <h3>Username: {props.username}</h3>
        <p>Age: {props.age}</p>
      </div>
    </div>
  );
};

export default function CO3_3() {
  return (
    <div>
      <h3>Lesson 3.3: Components with Images</h3>
      
      {/* 2. Passing image URLs as props [cite: 173, 227] */}
      <Profile 
        username="Alice" 
        age={25} 
        imgUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" 
      />
      
      <Profile 
        username="Bob" 
        age={30} 
        imgUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" 
      />
    </div>
  );
}