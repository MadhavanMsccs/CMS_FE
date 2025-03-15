// import styled from 'styled-components';

// // Main container with hover effects for background layers
// export const RegisterContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;

//   &:hover, &:active {
//     .top, .bottom {
//       &:before, &:after {
//         margin-left: 150px;
//         transform: scale(1.1) rotate(10deg);
//         transition-delay: 0s;
//       }
//     }
//     .form-container {
//       opacity: 1;
//       transform: translate(-50%, -50%) scale(1.05);
//       transition-delay: 0.2s;
//     }
//   }
// `;

// // Background layers for top and bottom effects
// export const TopLayer = styled.div`
//   &:before, &:after {
//     content: '';
//     display: block;
//     position: absolute;
//     width: 200vmax;
//     height: 200vmax;
//     top: 50%;
//     left: 50%;
//     margin-top: -100vmax;
//     transform-origin: 0 50%;
//     transition: all 0.7s ease-in-out;
//     z-index: 1;
//     opacity: 0.7;
//     transition-delay: 0.2s;
//   }
//   &:before {
//     transform: rotate(40deg);
//     background: #ff5733; /* Updated top layer color */
//   }
//   &:after {
//     transform: rotate(130deg);
//     background: #ffc300; /* Updated secondary top layer color */
//   }
// `;

// export const BottomLayer = styled(TopLayer)`
//   &:before {
//     transform: rotate(-40deg);
//     background: #33c3ff; /* Updated bottom layer color */
//   }
//   &:after {
//     transform: rotate(-130deg);
//     background: #9b59b6; /* Updated secondary bottom layer color */
//   }
// `;

// // Form container for centering the form
// export const FormContainer = styled.form`
//   position: absolute;
//   width: 400px;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 30px;
//   background: white;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//   border-radius: 8px;
//   z-index: 10;
//   opacity: 0;
//   transition: all 0.5s ease-in-out;

//   h2 {
//     color: #2c3e50;
//     margin-bottom: 20px;
//   }
// `;

// // Input field styling for the form
// export const InputField = styled.input`
//   width: 100%;
//   padding: 15px;
//   margin: 5px 0;
//   border-radius: 6px;
//   border: 1px solid #bdc3c7;
//   font-family: inherit;
//   font-size: 1em;
//   background: #f9f9f9;
//   transition: all 0.3s ease-in-out;

//   &:focus {
//     border-color: #3498db;
//     box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
//   }
// `;

// // Select dropdown for user type
// export const UserTypeSelector = styled.select`
//   width: 100%;
//   padding: 15px;
//   margin: 10px 0;
//   border-radius: 6px;
//   border: 1px solid #bdc3c7;
//   background: #fff;
//   font-size: 1em;
//   color: #2c3e50;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     border-color: #f39c12;
//   }
// `;

// // Submit button styling
// export const SubmitButton = styled.button`
//   width: 100%;
//   padding: 15px;
//   margin: 10px 0;
//   background: #e74c3c; /* Updated button color */
//   border: none;
//   color: white;
//   font-size: 1em;
//   cursor: pointer;
//   border-radius: 6px;
//   transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;

//   &:hover {
//     background: #c0392b;
//     transform: scale(1.05);
//   }
// `;

// export const ClassSelector = styled.select`
//   padding: 10px;
//   margin: 10px 0;
//   border-radius: 6px;
//   border: 1px solid #bdc3c7;
//   font-size: 16px;
//   background: #f5f5f5;
//   color: #2c3e50;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     border-color: #8e44ad;
//   }
// `;




import styled from 'styled-components';

// Main container
export const RegisterContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(to top, #33c3ff, #9b59b6); /* Reversed background pattern */
`;

// Background layers for top and bottom effects
export const TopLayer = styled.div`
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    z-index: 1;
    opacity: 0.7;
  }
  &:before {
    background: #33c3ff; /* Reversed top layer color */
  }
  &:after {
    background: #9b59b6; /* Reversed secondary top layer color */
  }
`;

export const BottomLayer = styled(TopLayer)`

 &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    z-index: 1;
    opacity: 0.7;
  }
  &:before {
    background: #33c3ff; /* Reversed top layer color */
  }
  &:after {
    background: #9b59b6; /* Reversed secondary top layer color */
  }
`;

// Form container for centering the form
export const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 10;
  opacity: 1;

  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
`;

// Input field styling for the form
export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  border-radius: 6px;
  border: 1px solid #bdc3c7;
  font-family: inherit;
  font-size: 1em;
  background: #f9f9f9;
`;

// Select dropdown for user type
export const UserTypeSelector = styled.select`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  border: 1px solid #bdc3c7;
  background: #fff;
  font-size: 1em;
  color: #2c3e50;
`;

// Submit button styling
export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: #e74c3c; /* Updated button color */
  border: none;
  color: white;
  font-size: 1em;
  cursor: pointer;
  border-radius: 6px;
`;

export const ClassSelector = styled.select`
  padding: 10px;
  margin: 10px 0;
  border-radius: 6px;
  border: 1px solid #bdc3c7;
  font-size: 16px;
  background: #f5f5f5;
  color: #2c3e50;
`;
