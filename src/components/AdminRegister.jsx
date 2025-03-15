import React, { useState } from 'react';
import {
  RegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
  UserTypeSelector,
  ClassSelector,
  TopLayer,
  BottomLayer,
} from '../styles/RegisterStyles'; // Make sure you have these styles defined
import axios from 'axios';
import validator from 'validator'; // Make sure to install this if you haven't

const Register = () => {
  const [userType, setUserType] = useState('admin'); // Default to 'admin'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [personalId, setPersonalId] = useState('');
  const [className, setClassName] = useState(''); // Updated to use className
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
    let registrationData = { name, email, password };
  
    // Handle registration data based on user type
    switch (userType) {
      case 'admin':
        registrationData.secretKey = secretKey; // Include secret key for admin
        break;
      case 'teacher':
        registrationData.personalId = personalId; // Include personal ID for teacher
        break;
      case 'student':
        if (!className) {
          setError('Please select a class.'); // Check if class is selected
          return;
        }
        registrationData.class = className; // Use className for registration
        break;
      default:
        setError('Invalid user type'); // Handle unexpected user types
        return;
    }
  
    // Validate email format
    if (!validator.isEmail(email)) {
      setError('Invalid email format');
      return;
    }
  
    try {
      const response = await axios.post(`http://localhost:4000/api/v1/register/${userType}`, registrationData);
  
      // Check the response status
      if (response.status === 201) {
        alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} registered successfully!`);
        window.location.href = `/${userType}/dashboard`; // Redirect based on user type
      } else {
        setError('Registration failed. Please check your details.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Set error message from server response or use a generic message
      setError(error.response?.data?.message || 'Invalid credentials or server error.');
    }
  };
  

  return (
    <RegisterContainer>
      <TopLayer className="top" />
      <BottomLayer className="bottom" />
      <FormContainer className="form-container" onSubmit={handleRegister}>
        <h2>{`Register as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`}</h2>
        <UserTypeSelector value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="teacher">Staff</option>
          <option value="student">Student</option>
        </UserTypeSelector>

        <InputField type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {/* Conditional Inputs for Each User Type */}
        {userType === 'admin' && (
          <InputField type="text" placeholder="Secret Key" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} required />
        )}
        {userType === 'teacher' && (
          <InputField type="text" placeholder="Personal ID" value={personalId} onChange={(e) => setPersonalId(e.target.value)} required />
        )}
        {userType === 'student' && (
          <ClassSelector value={className} onChange={(e) => setClassName(e.target.value)} required>
            <option id='PG' value="">Select Class</option>
            <option id='PG' value="MSC CS">II MSC CS</option>
            <option id='PG' value="MSC CS">I MSC CS</option>
            <option id='PG' value="MCA">II MCA</option>
            <option id='PG' value="MCA">I MCA</option>
            <option id='PG' value="MSC Micro">I MSC Micro-Biology</option>
            <option id='PG' value="MSC Micro">II MSC Micro-Biology</option>
            <option id='MBA' value="MBA">I MBA</option>
            <option id='MBA' value="MBA">II MBA</option>
            <option id='PG' value="MA">MA English</option>
            <option id='UG'value="BSC CS">III  BSC CS</option>
            <option id='UG' value="BSC CS">II  BSC CS</option>
            <option id='UG' value="BSC CS">I  BSC CS</option>
            <option id='UG' value="BCA">III BCA</option>
            <option id='UG' value="BCA">II BCA</option>
            <option id='UG' value="BCA">I BCA</option>
            <option id='UG' value="BSC Micro">I BSC Micro</option>
            <option id='UG' value="BSC Micro">II BSC Micro</option>
            <option id='UG' value="BSC Micro">III BSC Micro</option>
            <option id='UG' value="BA">I BA English</option>
            <option id='UG' value="BA">II BA English</option>
            <option id='UG' value="BA">III BA English</option>

          </ClassSelector>
        )}

        <SubmitButton type="submit">Register</SubmitButton>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;





