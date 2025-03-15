import styled from 'styled-components';

// Main container for the profile page layout
export const ProfileContainer = styled.div`
  display: flex;
`;

// Sidebar container styling
export const SidebarContainer = styled.div`
  flex: 0 0 250px;
`;

// Main content area styling
export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

// Profile header title styling
export const ProfileHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Container for profile details
export const ProfileDetails = styled.div`
  max-width: 400px;
  
`;

// Individual profile label styling
export const ProfileLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

// Styling for profile information
export const ProfileInfo = styled.p`
  margin-bottom: 10px;
`;

// Button for editing profile
export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Wrapper for each profile detail item
export const ProfileDetail = styled.div`
  margin-bottom: 20px;
`;

// Label for profile details
export const Label = styled.span`
  font-weight: bold;
`;

// Display value next to the label
export const Value = styled.span`
  margin-left: 10px;
`;

// Edit modal container styling
export const EditModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Dark background overlay for the modal
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

// Modal content box styling
export const ModalContent = styled.div`
  position: relative;
  width: 500px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 200;
`;

// Form within the modal for editing profile details
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Form group for each input field within the modal
export const ModalFormGroup = styled.div`
  margin-bottom: 15px;
`;

// Label styling inside the modal
export const ModalLabel = styled.label`
  font-weight: bold;
  color: #495057;
  margin-bottom: 5px;
`;

// Input field styling inside the modal
export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border: 1px solid #007bff;
  }
`;

// Save button inside the modal
export const SaveButton = styled.button`
  padding: 10px 15px;
  background-color: #28a745;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

// Close button inside the modal
export const CloseButton = styled.button`
  padding: 10px 15px;
  background-color: #dc3545;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;


export const ProfilePhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
`;
