// // SidebarStyles.js
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const SidebarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
//   width: 250px;
//   height: 100%;
//   background-color: #2c3e50; /* Dark blue background */
//   color: white;
//   overflow-y: auto; /* Enable vertical scrolling */
//   padding-top: 60px;
//   transition: width 0.3s ease; /* Smooth width transition */
//   z-index: 100; /* Ensure sidebar stays above content */
// `;

// export const SidebarHeader = styled.div`
//   padding: 20px;
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
// `;

// export const SidebarNav = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// export const SidebarNavItem = styled.li`
//   display: flex;
//   align-items: center;
//   padding: 12px 20px;
//   font-size: 18px;
//   border-bottom: 1px solid #34495e; /* Darker border */
//   transition: background-color 0.3s ease;
//   &:hover {
//     background-color: #34495e; /* Darker background on hover */
//   }
// `;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   margin-left: 10px;
// `;

// export const SidebarIcon = styled.div`
//   margin-right: 10px;
// `;

// export const Logo = styled.img`
//   width: 50px;
//   height: auto;
// `;

// export const ToggleButton = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 0;
//   width: 30px;
//   height: 30px;
//   background-color: #212529; /* Darker background */
//   border-radius: 50%;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const ToggleIcon = styled.span`
//   color: white;
//   font-size: 20px;
//   transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
//   transition: transform 0.3s ease;
// `;




// SidebarStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 📌 Sidebar Container
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '260px' : '85px')}; /* Smooth width change */
  height: 100%;
  background: linear-gradient(135deg, #1e3c72, #2a5298); /* Blue gradient */
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease-in-out;
  box-shadow: ${({ isOpen }) => (isOpen ? '6px 0 20px rgba(0, 0, 0, 0.15)' : 'none')};
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
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
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
    transform: translateX(6px);
  }
`;

// 🔗 Sidebar Links
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 12px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcc70; /* Warm yellow highlight */
  }
`;

// 📌 Sidebar Icons
export const SidebarIcon = styled.div`
  margin-right: 12px;
  color: #ffcc70; /* Yellow accent */
  transition: transform 0.3s ease;

  ${SidebarNavItem}:hover & {
    transform: scale(1.15);
  }
`;

// 🖼 Sidebar Logo
export const Logo = styled.img`
  width: 55px;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(15deg);
  }
`;

// 🔘 Sidebar Toggle Button
export const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ffcc70, #ff6f61); /* Orange gradient */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
    background: linear-gradient(135deg, #ffb347, #ff6b5e);
  }
`;

// 🔄 Sidebar Toggle Icon
export const ToggleIcon = styled.span`
  color: white;
  font-size: 22px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`;
