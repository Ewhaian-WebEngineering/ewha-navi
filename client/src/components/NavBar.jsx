import React from 'react';
import { Link } from 'react-router-dom';  
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineStar, AiOutlineCar, AiOutlineMenu } from 'react-icons/ai';

const NavBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2e4730;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; 
  height: 70px; 
`;

const StyledLink = styled(Link)`
  color: white; 
  font-size: 24px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const HomeImage = styled.img`
  width: 40px;
  height: 40px;
`;

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <StyledLink to="/search">
          <AiOutlineSearch size={30} />
        </StyledLink>
        <StyledLink to="/path-list"> 
          <AiOutlineMenu size={30} />
        </StyledLink>
        <StyledLink to="/shuttle">
          <AiOutlineCar size={30} />
        </StyledLink>
        <StyledLink to="/menu">
          <AiOutlineStar size={30} />
        </StyledLink>
      </NavBarContainer>
      <CenterButton>
        <StyledLink to="/">
          <HomeImage src="/path/to/your/image.png" alt="Home Button" />
        </StyledLink>
      </CenterButton>
    </>
  );
}

export default NavBar;
