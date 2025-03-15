// AssignmentsStyles.js
import styled from 'styled-components';

export const AssignmentsContainer = styled.div`
  display: flex;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left:250px;
`;

export const AssignmentsContent = styled.div`
  padding: 20px;
`;

export const AssignmentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AssignmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AssignmentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddAssignmentForm = styled.form`
  margin-bottom: 20px;
`;

export const AddAssignmentInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const AddAssignmentTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: vertical;
`;

export const AddAssignmentButton = styled.button`
  padding: 10px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const SidebarContainer = styled.div`
  flex: 0 0 250px;
`;



export const AssignmentCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

export const AssignmentTitle = styled.h3`
  margin-bottom: 10px;
`;

export const AssignmentDescription = styled.p`
  color: #555;
  margin-bottom: 15px;
`;

export const AssignmentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

export const AssignmentDoneMessage = styled.p`
  color: #28a745;
  font-weight: bold;
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
export const AssignmentDeadline = styled.p`
  font-size: 0.9em;
  color: gray;
  margin: 0.5em 0;
`;
export const ClassSelect = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff; /* Change to your desired focus color */
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  option {
    padding: 10px; /* Adjust padding for dropdown options */
  }
`;