// AttendanceStyles.js
import styled from 'styled-components';

export const AttendanceContainer = styled.div`
  display: flex;
  padding-left: 300px;
  

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const AttendanceContent = styled.div`
  padding: 20px;
`;

export const AttendanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AttendanceList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AttendanceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StudentName = styled.span`
  flex: 1;
`;

export const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

export const Divider = styled.hr`
  margin-top: 5px;
  border: 0;
  border-top: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const AttendanceDate = styled.span`
  font-weight: bold;
`;

export const AttendanceStatus = styled.span`
  margin-left: 10px;
  color: ${({ present }) => (present ? 'green' : 'red')};
`;
export const StatItem = styled.div`
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const PersonName = styled.span`
  flex: 1;
`;
// In AttendanceStyles.js
export const AttendanceEmail = styled.span`
  margin-left: 10px; // Add margin for spacing
  color: #333; // Adjust color as needed
`;
export const AttendanceMetrics = styled.span`
  margin-left: 10px; // Add margin for spacing
  color: #333; // Adjust color as needed
`;
export const PersonEmail = styled.div`
  font-size: 0.9em;             /* Slightly smaller font size for email */
  color: #555;                  /* Medium gray color for email text */
  margin-top: 5px;             /* Space between the name and the email */
  word-break: break-all;        /* Break long email addresses to prevent overflow */
  text-decoration: none;        /* Remove underline */
  
  &:hover {
    color: #007bff;             /* Change color on hover for better interaction */
    cursor: pointer;            /* Change cursor to pointer on hover */
  }
`;