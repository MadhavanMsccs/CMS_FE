// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, FormContainer, InputField, Button, UserTypeSelector } from '../styles/SignInStyles';
// import { Navbar,Navbar1, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, 
//   HomeContainer, SchoolImage,SchoolImage1, SchoolInfo, Title, Title1,Title2, LoremTextContainer, 
//   AdminRegisterLink, 
//   AdminRegisterLink1 } from "../styles/styles";
//   import bg from "../assets/logo1.jpg";

// const ChooseUser = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('admin'); // Default to 'admin'
//   const navigate = useNavigate();

//   // Use a single sign-in endpoint for all user types
//   const endpoint = 'http://localhost:4000/api/v1/users/signin';

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     try {
//       // Include userType in the request body
//       const response = await axios.post(endpoint, { email, password, userType });

//       if (response && response.status === 200) {
//         // Store the JWT token on successful login
//         const token = response.data.token;
//         localStorage.setItem('authToken', token);

//         alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful!`);

//         // Navigate based on user type
//         if (userType === 'admin') {
//           navigate('/admin/dashboard');
//         } else if (userType === 'teacher') {
//           navigate('/teacher/dashboard');
//         } else {
//           navigate('/student/dashboard');
//         }
//       } else {
//         alert('Login failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during sign-in:', error);
//       if (error.response) {
//         alert(`Error: ${error.response.data.message}`);
//       } else {
//         alert('An error occurred. Please check your input or try again later.');
//       }
//     }
//   };

//   return (
//     <>
//     <Navbar>
//     <Logo src={bg} alt="logo" />
//     <Title2><b>SDS College of Arts and Science</b><br/>Trichy Road,Sulur,Coimbatore<br/></Title2>
//     <ButtonsContainer>
//         {/* <LoginButton onClick={handleLoginClick}>Sign In</LoginButton> */}
//         <AdminRegisterLink to="/admin-register">New User</AdminRegisterLink>
//     </ButtonsContainer>
// </Navbar>
// <Navbar1>
// <NavigationLinks>
//         <NavLink href="#About">Home</NavLink>
//         <NavLink href="#About">About</NavLink>
//         <NavLink href="#products">Courses</NavLink>
//         <NavLink href="#">Contact</NavLink>
// </NavigationLinks>
// </Navbar1>
//     <Container>
//       <h2>User Sign In</h2>
//       <FormContainer onSubmit={handleSignIn}>
//         {/* Email Input */}
//         <InputField
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         {/* Password Input */}
//         <InputField
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {/* User Type Selector */}
//         <UserTypeSelector value={userType} onChange={(e) => setUserType(e.target.value)}>
//           <option value="admin">Admin</option>
//           <option value="teacher">Staff</option>
//           <option value="student">Student</option>
//         </UserTypeSelector>

//         {/* Submit Button */}
//         <Button type="submit">Sign In</Button>
//       </FormContainer>
//     </Container></>
//   );
// };

// export default ChooseUser;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import bg from "../assets/logo1.jpg";

// Main Container
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #ff7eb3, #57c4e5);
`;

// Background Layers
const Layer = styled.div`
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    z-index: 1;
    opacity: 0.6;
  }
`;

const Top = styled(Layer)`
  &:before { background: #ffb677; }
  &:after { background: #ff7eb3; }
`;

const Bottom = styled(Layer)`
  &:before { background: #1f3f7a; }
  &:after { background: #57c4e5; }
`;

// ✅ FIXED CENTERING
const Center = styled.div`
  width: 400px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  opacity: 1; /* Ensure it's always visible */
  z-index: 1000;
`;

// Input Field
const InputField = styled.input`
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  border-radius: 6px;
  border: 1px solid #aaa;
  font-size: 16px;
`;

// Button
const Button = styled.button`
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  border-radius: 6px;
  border: none;
  background: #ff7eb3;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;


export { Container, Top, Bottom, Center, InputField, Button };


const ChooseUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin'); // Default to 'admin'
  const navigate = useNavigate();

  // Use a single sign-in endpoint for all user types
  const endpoint = 'http://localhost:4000/api/v1/users/signin';

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(endpoint, { email, password, userType });

      if (response && response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful!`);

        if (userType === 'admin') {
          navigate('/admin/dashboard');
        } else if (userType === 'teacher') {
          navigate('/teacher/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('An error occurred. Please check your input or try again later.');
      }
    }
  };

  return (
    <Container>
      <Top className="top" />
      <Bottom className="bottom" />
      <Center className="center">
        <h2>Please Sign In</h2>
        {/* Email Input */}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* User Type Selector */}
        <InputField
          as="select"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="teacher">Staff</option>
          <option value="student">Student</option>
        </InputField>

        {/* Submit Button */}
        <Button type="submit" onClick={handleSignIn}>
          Sign In
        </Button>
      </Center>
    </Container>
  );
};

export default ChooseUser;
