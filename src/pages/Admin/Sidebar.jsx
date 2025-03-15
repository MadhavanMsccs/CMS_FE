import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';  
import b2 from "../../assets/7861942.jpg"
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsChatDots, BsCalendarEvent } from 'react-icons/bs';


// 📌 Sidebar Container
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '260px' : '80px')};
  height: 100%;
  background: linear-gradient(135deg, #2a2d64, #191a3b); /* Dark Gradient */
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: ${({ isOpen }) => (isOpen ? '8px 0 20px rgba(0, 0, 0, 0.15)' : 'none')};
  z-index: 100;
`;

// 🔖 Sidebar Header
export const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

// 📌 Sidebar Navigation List
export const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

// 🏷 Sidebar Nav Item
export const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 20px;
  font-size: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
`;

// 🔗 Sidebar Links
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f4a261; /* Orange highlight */
  }
`;

// 📌 Sidebar Icons
export const SidebarIcon = styled.div`
  margin-right: 10px;
  color: #f4a261; /* Orange */
  transition: transform 0.3s ease;

  ${SidebarNavItem}:hover & {
    transform: scale(1.1);
  }
`;

// 🖼 Sidebar Logo
export const Logo = styled.img`
  width: 50px;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(10deg);
  }
`;

// 🔘 Sidebar Toggle Button
export const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #f4a261, #e76f51); /* Orange gradient */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// 🔄 Sidebar Toggle Icon
export const ToggleIcon = styled.span`
  color: white;
  font-size: 22px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear user authentication token (example: localStorage)
    localStorage.removeItem('authToken');
    // Redirect to login page
    window.location.href = '/';
  };

  return (
    <SidebarContainer style={{ width: isOpen ? '250px' : '50px' }}>
      <SidebarHeader>
        <Logo src={b2} alt="Logo" />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon><BsGraphUp /></SidebarIcon>
          <StyledLink to="/admin/dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsPeople /></SidebarIcon>
          <StyledLink to="/admin/classes">Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsPeople /></SidebarIcon>
          <StyledLink to="/admin/students">Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsPerson /></SidebarIcon>
          <StyledLink to="/admin/teachers">Teachers</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsFileText /></SidebarIcon>
          <StyledLink to="/admin/assignments">Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/admin/exams">Exams</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsGraphDown /></SidebarIcon>
          <StyledLink to="/admin/performance">Performance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsCalendar /></SidebarIcon>
          <StyledLink to="/admin/attendance">Attendance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/admin/library">Library</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsChatDots /></SidebarIcon>
          <StyledLink to="/admin/communication">Announcement</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsCalendarEvent /></SidebarIcon>
          <StyledLink to="/admin/events">Events & Calendar</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem onClick={handleLogout}>
          <SidebarIcon></SidebarIcon>
          <StyledLink to="#">Logout</StyledLink>
        </SidebarNavItem>
      </SidebarNav>
      <ToggleButton onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;