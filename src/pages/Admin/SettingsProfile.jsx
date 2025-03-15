import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  ProfilePhoto,
} from '../../styles/SettingsProfileStyles';

const SettingsProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    profilePhoto: '',
    userType: '',
  });

  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the sign-in route temporarily
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No authentication token found. Please log in.');
          setLoading(false);
          return;
        }

        // Fetch from signin route temporarily to get user data
        const response = await axios.post(
          'http://localhost:4000/api/v1/users/signin',
          { email: 'test@example.com', password: 'password123', userType: 'admin' } // Sample credentials
        );

        if (response.data) {
          // Assuming your signin route returns user details
          setUserInfo(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to fetch user profile. Please try again.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileDetails>
          <ProfilePhoto src={userInfo.profilePhoto || 'https://via.placeholder.com/150'} alt="Profile" />
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{userInfo.name}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{userInfo.email}</ProfileInfo>
          {userInfo.phone && (
            <>
              <ProfileLabel>Phone:</ProfileLabel>
              <ProfileInfo>{userInfo.phone}</ProfileInfo>
            </>
          )}
          {userInfo.address && (
            <>
              <ProfileLabel>Address:</ProfileLabel>
              <ProfileInfo>{userInfo.address}</ProfileInfo>
            </>
          )}
          {userInfo.qualification && (
            <>
              <ProfileLabel>Qualification:</ProfileLabel>
              <ProfileInfo>{userInfo.qualification}</ProfileInfo>
            </>
          )}
          <ProfileLabel>User Type:</ProfileLabel>
          <ProfileInfo>{userInfo.userType.charAt(0).toUpperCase() + userInfo.userType.slice(1)}</ProfileInfo>
        </ProfileDetails>
      </Content>
    </ProfileContainer>
  );
};

export default SettingsProfile;
