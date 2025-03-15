// styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #007bff;
  color: black;
  font-family: Arial, sans-serif;
  z-index: 1000;
  border-bottom: 2px solid black;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;
export const Navbar1 = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  background-color: #6BD455;
  color: black;
  font-family: Arial, sans-serif;
  z-index: 1000;
  border-bottom: 2px solid black;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-left:100px;
  mix-blend-mode: multiply;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const Title2 = styled.p`

 margin-left: -800px; 
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
    margin-left:100px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const NavLink = styled.a`
  margin-right: 20px;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  background: #6BD455;
  padding:10px;
  border-radius:10px;

  &:hover {
  background:#fff;
  padding:10px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;

export const LoginButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;

    &:hover {
    background-color:#007bff ;
    color:black;
     border: 2px solid orange;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const GuestButton = styled.button`
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid orange;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
    
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  // background: linear-gradient(45deg, #000000, #d3d3d3);
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  
  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const SchoolInfo = styled.div`
  margin-top: 0px;
  width:80%;
`;

export const SchoolImage = styled.img`
  width: 80%;
  max-height: 60vh;
  object-fit: cover;


  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SchoolImage1 = styled.img`
  width: 100%;
  height:700px;
  max-height: 60vh;
  object-fit: cover;


  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: black;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Title1 = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: blue;
  margin-top:80px;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const LoremTextContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top:20px;
  font-size: 18px;
  color: black;
  text-align: justify;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AdminRegisterLink = styled(Link)`
color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid orange;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  text-decoration:none;
  color:black;

  &:hover {
    background-color: orange;
    color:green;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;


export const AdminRegisterLink1 = styled(Link)`
  color: black;
  font-size: 19px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
  border:2px solid orange;
  padding:10px 20px;
  margin-left:10px;

  &:hover {
    background-color:orange;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;