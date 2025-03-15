import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f9fc;
`;

export const FormContainer = styled.form`
  background: #ffffff;
  padding: 40px 50px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
export const Button = styled.button`
  padding: 15px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
export const UserTypeSelector = styled.select`
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  background-color: #f7f9fc;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;