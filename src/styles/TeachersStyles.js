import styled from 'styled-components';

export const TeachersContainer = styled.div`
  display: flex;
  margin-left: 300px;
  background-color: #f0f0f0; /* Light background for contrast */
`;

export const Content = styled.div`
  flex: 1;
`;

export const TeachersContent = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const TeachersHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333; /* Darker font color */
`;

export const TeacherList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TeacherItem = styled.li`
  background-color: #e9ecef;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center; /* Align photo, name, and email */
`;

export const TeacherPhoto = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dcdcdc; /* Placeholder background color */
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666; /* Placeholder text color */
  font-size: 20px;
  font-weight: bold;
`;

/* Styling for the name and email details */
export const TeacherDetails = styled.div`
  display: flex;
  flex-direction: column; /* Align name and email separately */
  color: #333; /* Dark font color */
`;

export const TeacherName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #000; /* Darker font color */
`;

export const TeacherEmail = styled.div`
  font-size: 16px;
  color: #555; /* Slightly lighter font color */
`;

export const AddTeacherForm = styled.form`
  margin-bottom: 20px;
`;

export const AddTeacherInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddTeacherButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const TeacherDetailsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeacherDetailsContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
