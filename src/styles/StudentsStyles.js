// StudentsStyles.js
import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;

`;

export const Content = styled.div`
  flex: 1;
  margin-left:300px;
`;

export const StudentsContent = styled.div`
  padding: 20px;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddStudentForm = styled.form`
  margin-bottom: 20px;
`;

export const AddStudentInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddStudentButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const StudentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const StudentTableHeader = styled.thead`
  background-color: #f4f4f4;
`;

export const StudentTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const StudentTableCell = styled.td`
  padding: 12px;
  text-align: left;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StudentTableBody = styled.tbody``;