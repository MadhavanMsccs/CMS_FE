import styled from 'styled-components';

export const EventCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100vh;
  overflow-y: auto;
  color: #111; /* Changed text color for higher contrast */
  margin-left: 250px; 

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #bbb; /* Slightly darker border */
  height: calc(100vh - 60px);
  overflow-y: auto;
  color: #222; /* Improved text color for content */

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CalendarContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #bbb;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #333; /* Updated color for calendar text */

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Events = styled.div`
  margin-top: 30px;
  color: #333; /* Set text color for event headers */

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Event = styled.div`
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #bbb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #444; /* Text color adjustment */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const AddEventForm = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #111; /* Adjust text color */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const EventInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #bbb;
  border-radius: 8px;
  margin-right: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #222; /* Input text color */

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const AddEventButton = styled.button`
  padding: 12px 24px;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const ErrorText = styled.p`
  color: #d32f2f;
  margin-top: 10px;
`;

export const DeleteButton = styled.button`
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  background: #e57373;
  color: white;
  font-size: 14px;
  transition: background 0.3s ease;

  &:hover {
    background: #d32f2f;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

export const ClassDropdown = styled.select`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #bbb;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #222; /* Updated dropdown text color */

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background: #ffb300;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: #ffa000;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
  }
`;

export const DateInput = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #bbb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #222; /* Text color for date input */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
