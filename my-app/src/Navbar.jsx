import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Dropdown from './Dropdown';

const NavWrapper = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
`
const Logo = styled.div`
flex:3;
background-color: black;
p{
  color:white;
  text-align: center;
}
`
const Nav = styled.nav`
flex:6;
`
const UL = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
justify-content:space-around;
`
const LI = styled.li`
font-family: 'Arial', sans-serif;

  &:hover {
    color: blue; 
}
`
const ICONS = styled.div`
  display: flex;
  justify-content: flex-end; // Center horizontally
  align-items: center;     // Center vertically
  flex:3;
  background-color: black;
  & > * {
    margin-right: 20px;
    transition: transform 0.3s ease; /* Add a smooth transition effect */
  }

  /* Add styles on hover */
  & > *:hover {
    transform: scale(1.2);
  }
`;


const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <NavWrapper>
        <Logo><p>dearsoft.</p></Logo>
        <Nav>
          <UL>
            <LI >
              <Link to="/" style={{ textDecoration: 'none', color:'#333' }} onMouseEnter={handleMouseLeave}>Home</Link>
            </LI>
            <LI >
            <Link to="/About" style={{ textDecoration: 'none', color:'#333' }} onMouseEnter={handleMouseLeave}>About</Link>
            </LI>
            <LI >
            <Link to="/Contact" style={{ textDecoration: 'none', color:'#333', }} onMouseEnter={handleMouseLeave}>Contact</Link>
            </LI>
            <LI >
            <Link to="/Services" style={{ textDecoration: 'none', color:'#333' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
           >Services</Link>
            {dropdown && <Dropdown />}
            </LI>
          </UL>
        </Nav>
        <ICONS>
      <SocialIcon url="https://www.facebook.com" style={{ height: 30, width: 30 }}/>
      <SocialIcon url="https://www.instagram.com" style={{ height: 30, width: 30 }}/>
      <SocialIcon url="https://www.twitter.com" style={{ height: 30, width: 30  }}/>
      <SocialIcon url="https://www.linkedin.com" style={{ height: 30, width: 30  }}/>
        </ICONS>
    </NavWrapper>
  )
}

export default Navbar