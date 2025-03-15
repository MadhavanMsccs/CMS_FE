import styled from 'styled-components';

export const ClassesContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ClassesContent = styled.div`
  padding: 20px;
`;

export const ClassesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #007bff; /* Blue text color */
  text-align: center; /* Center align the header */
`;

export const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ClassItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e0f7fa; /* Light cyan background on hover */
    transform: translateY(-5px); /* Slight lift on hover */
  }
`;

export const AddClassForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* Center align the form */
`;
export const AddClassInput = styled.input`
  padding-right: 100px;
  font-size: 18px; /* Bigger font for better visibility */
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  background-color: #fff; /* Ensure input has a visible background */
  color: #000; /* Ensure text is black and visible */
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;



export const AddClassButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

export const ClassContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const ClassHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #007bff; /* Blue text color */
  text-align: center; /* Center align the header */
`;

export const GradeHeader = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555; /* Darker text color */
`;

export const ErrorMessage = styled.p`
  color: red;
  background-color: #fdd;
  padding: 10px;
  border: 1px solid red;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const SuccessMessage = styled.p`
  color: green;
  background-color: #dfd;
  padding: 10px;
  border: 1px solid green;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d; /* Red background */
  color: white; /* White text */
  border: none; /* No border */
  padding: 8px 12px; /* Padding */
  margin-left: 10px; /* Space between class name and button */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: #ff1a1a; /* Darker red on hover */
  }

  &:focus {
    outline: none; /* Remove outline on focus */
  }
`;

export const AddClassSelect = styled.select`
  padding: 10px;
  margin-right: 10px;
`;

export const AddClassDateInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

export const TotalClasses = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;
