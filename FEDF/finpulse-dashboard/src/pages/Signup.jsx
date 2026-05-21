import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    aadhaar: "",
    pan: "",
    accountType: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userData);

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="container">
      <div className="signup-form-box">

        <h1>FinPulse</h1>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dob"
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <textarea
            name="address"
            placeholder="Residential Address"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pincode"
            placeholder="PIN Code"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Number"
            maxLength="12"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pan"
            placeholder="PAN Number"
            onChange={handleChange}
            required
          />

          <select
            name="accountType"
            onChange={handleChange}
            required
          >
            <option value="">Select Account Type</option>
            <option>Savings Account</option>
            <option>Current Account</option>
            <option>Salary Account</option>
          </select>

          <button type="submit">
            Register
          </button>
        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;