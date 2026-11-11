import React, { useState, useEffect } from 'react';

/* ==========================================================================
   WAY 1: STRUCTURAL & CONCEPT QUESTIONS (Viva & Interview Prep)
   ==========================================================================
   Q1: Why does standard React state disappear on browser refresh, and how does 
       LocalStorage fix this limitation?
   Q2: Why must we use JSON.stringify() when saving arrays to LocalStorage, and 
       JSON.parse() when reading them back?
   Q3: Explain how conditional rendering is used in this app to simulate page 
       routing without downloading an external navigation library.
   Q4: Why do we use the array '.map()' method to perform the UPDATE operation?
   ========================================================================== */

// 🗂️ STATIC SEED DATA
const initialSeedUsers = [
  { id: 1, name: "Rahul Kumar", rollNo: "220003001", branch: "CSE" },
  { id: 2, name: "Sneha Reddy", rollNo: "220003045", branch: "ECE" },
  { id: 3, name: "Anish Sharma", rollNo: "220003112", branch: "Biotech" }
];

const validCredentials = [
  { username: "admin", password: "klu" },
  { username: "teacher", password: "klu" }
];

export default function App() {
  
  // Initialize state from LocalStorage or use original seed values
  const [users, setUsers] = useState(() => {
    const savedDiskData = localStorage.getItem("klu_student_db");
    return savedDiskData ? JSON.parse(savedDiskData) : initialSeedUsers;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('VIEW'); // Panel state: 'VIEW' | 'ADD' | 'EDIT' | 'LOGIN'
  const [editingUser, setEditingUser] = useState(null); // Tracks target update record

  // Form input control states
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Automatically write data to local disk storage whenever the 'users' array shifts
  useEffect(() => {
    localStorage.setItem("klu_student_db", JSON.stringify(users));
  }, [users]);

  // --- AUTHENTICATION ACTIONS ---
  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = validCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );

    if (isValid) {
      setIsLoggedIn(true);
      setActiveTab('VIEW');
      setUsername(""); setPassword("");
    } else {
      alert("Invalid Credentials! (Try: admin / klu)");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('VIEW');
    setEditingUser(null);
  };

  // --- CRUD OPERATIONS ---
  
  // 1. CREATE OPERATION
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!name || !rollNo || !branch) return alert("Please fill all fields!");

    const newUser = { id: Date.now(), name, rollNo, branch };
    setUsers([...users, newUser]); // Keep state immutable via spread operator

    setName(""); setRollNo(""); setBranch("");
    setActiveTab('VIEW');
  };

  // 2. SETUP UPDATE STEP (Loads object data into input parameters)
  const startEditUser = (student) => {
    setEditingUser(student);
    setName(student.name);
    setRollNo(student.rollNo);
    setBranch(student.branch);
    setActiveTab('EDIT');
  };

  // 3. COMMIT UPDATE OPERATION
  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (!name || !rollNo || !branch) return alert("Please fill all fields!");

    // Map loops over data, swaps out the edited student, leaves others untouched
    const updatedList = users.map((u) => 
      u.id === editingUser.id ? { ...u, name, rollNo, branch } : u
    );

    setUsers(updatedList);
    setEditingUser(null);
    setName(""); setRollNo(""); setBranch("");
    setActiveTab('VIEW');
  };

  // 4. DELETE OPERATION
  const handleDeleteUser = (id) => {
    if (!isLoggedIn) return alert("Access Denied! Log in as Admin.");
    
    const filtered = users.filter((u) => u.id !== id);
    setUsers(filtered);
    
    if (editingUser && editingUser.id === id) {
      setEditingUser(null);
      setName(""); setRollNo(""); setBranch("");
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      
      {/* 🎀 BARE NAVIGATION RIBBON LINKS */}
      <nav style={{ background: '#eee', padding: '10px', display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <strong>🏫 KLU Portal</strong>
        <button onClick={() => setActiveTab('VIEW')}>📋 View Students</button>
        
        {isLoggedIn && (
          <button onClick={() => { setActiveTab('ADD'); setName(""); setRollNo(""); setBranch(""); }}>
            ➕ Register Student
          </button>
        )}

        {isLoggedIn && activeTab === 'EDIT' && (
          <span style={{ color: 'blue', fontWeight: 'bold' }}>✏️ Mode: Editing...</span>
        )}
        
        {!isLoggedIn ? (
          <button style={{ marginLeft: 'auto', background: '#e2e8f0' }} onClick={() => setActiveTab('LOGIN')}>🔐 Admin Login</button>
        ) : (
          <button style={{ marginLeft: 'auto', background: '#fee2e2', color: 'red' }} onClick={handleLogout}>
            🚪 Logout
          </button>
        )}
      </nav>

      {/* 🟢 STATUS MESSAGE BAR */}
      <div style={{ background: isLoggedIn ? '#d1fae5' : '#ffedd5', padding: '10px', marginBottom: '20px' }}>
        <b>System Status:</b> {isLoggedIn ? "Admin Access Granted" : "Public Read-Only Mode"}
      </div>

      {/* 🎴 VIEW 1: STUDENT DATA CONTAINER */}
      {activeTab === 'VIEW' && (
        <div>
          <h2>Active Student List</h2>
          {users.length === 0 ? <p>No records found in database.</p> : (
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {users.map((student) => (
                <div key={student.id} style={{ border: '2px solid #ccc', padding: '15px', borderRadius: '5px', width: '200px' }}>
                  <span style={{ color: 'purple', fontSize: '0.8rem', fontWeight: 'bold' }}>{student.branch}</span>
                  <h3>{student.name}</h3>
                  <p><b>Roll:</b> {student.rollNo}</p>
                  
                  {isLoggedIn && (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <button onClick={() => startEditUser(student)}>✏️ Edit</button>
                      <button style={{ color: 'red' }} onClick={() => handleDeleteUser(student.id)}>🗑️ Delete</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ➕ VIEW 2: ADD RECORD INPUT form */}
      {activeTab === 'ADD' && isLoggedIn && (
        <div>
          <h2>➕ Register New Student</h2>
          <form onSubmit={handleAddUser} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
            <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
            <button type="submit" style={{ background: '#cdf' }}>Save Record to LocalStorage</button>
          </form>
        </div>
      )}

      {/* ✏️ VIEW 3: EDIT RECORD INPUT form */}
      {activeTab === 'EDIT' && isLoggedIn && (
        <div>
          <h2>✏️ Update Student Profile</h2>
          <form onSubmit={handleUpdateUser} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
            <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={{ background: '#cfc', flex: 2 }}>Save Changes</button>
              <button type="button" onClick={() => setActiveTab('VIEW')} style={{ flex: 1 }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* 🔐 VIEW 4: SECURITY PORTAL INTERFACE */}
      {activeTab === 'LOGIN' && (
        <div>
          <h2>🔐 Administrator Authentication</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" style={{ background: '#cfc' }}>Verify Identity</button>
          </form>
          <p><small>Demo Credentials: <b>admin / klu</b></small></p>
        </div>
      )}

    </div>
  );
}
