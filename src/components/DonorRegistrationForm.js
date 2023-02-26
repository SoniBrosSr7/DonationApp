
import React, { useState } from "react";

const RegistrationForm = () => {
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
            validationErrors.donorName = "donorName is required";
        } else if (donorName.length <= 8) {
            validationErrors.password = "Password must be at least 8 characters long";
        }

        if (!phone.trim()) {
            validationErrors.phone = "Phone Number is required";
        }
        else if (isValidMobileNumber(phone)) // true) {
            validationErrors.email = "Phone Number is invalid";
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
    <form onSubmit={handleSubmit}>
        <label>
            Donor Name:
            <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
            />
            {errors.donorName && <div className="error" style={{color:"red"}}>{errors.donorName}</div>}
        </label>
        <label>
            Donor Phone Number:
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
        </label>
        <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
        </label>
        <label>
            Password:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
        </label>
        <label>
            Confirm password:
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
            )}
        </label>
        <button type="submit">Register</button>
    </form>
);
};

export default RegistrationForm;
