import React, { useState } from "react";
import "./DonorRegistrationFrom.css"; // Import the CSS file


const DonorRegistrationForm = () => {
  // Define state for form inputs and errors
  const [donorName, setDonorName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const isValidMobileNumber = (phoneNumber) => {
    // Regular expression to check if the phoneNumber contains only numbers
    const phoneNumberRegex = /^[0-9]+$/;

    // Check if the phoneNumber matches the regex and has 10 digits (assuming a standard 10-digit mobile number)
    return phoneNumberRegex.test(phoneNumber) && phoneNumber.length === 10;
  };

  // Define function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    const validationErrors = {};
    if (!donorName.trim()) {
      validationErrors.donorName = "Donor name is required";
    } else if (donorName.length < 8) {
      validationErrors.donorName = "Donor name must be at least 8 characters long";
    }

    if (!isValidMobileNumber(phone)) {
      validationErrors.phone = "Phone number is invalid";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    // If there are validation errors, set errors state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // If form is valid, submit form data to server
    // ...
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
    <div className="form-field">
      <label htmlFor="donor-name">Donor Name:</label>
      <input
        type="text"
        id="donor-name"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
        required
      />
      {errors.donorName && (
        <div className="error" style={{ color: "red" }}>
          {errors.donorName}
        </div>
      )}
    </div>
    <div className="form-field">
      <label htmlFor="phone">Donor Phone Number:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {errors.phone && <div className="error">{errors.phone}</div>}
    </div>
    <div className="form-field">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {errors.email && <div className="error">{errors.email}</div>}
    </div>
  
    <div className="form-field">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errors.password && <div className="error">{errors.password}</div>}
    </div>
  
    <div className="form-field">
      <label htmlFor="confirm password">Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      {errors.confirmPassword && (
        <div className="error">{errors.confirmPassword}</div>
      )}
    </div>
    <button type="submit">Register</button>
  </form>
  
);
};
export {DonorRegistrationForm};