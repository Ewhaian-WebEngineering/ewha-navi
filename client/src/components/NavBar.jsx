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
  justify-content: space-around; /* 버튼을 균등하게 배분 */
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
  position: relative; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const HomeImage = styled.img`
  width: 40px;
  height: 40px;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <StyledLink to="/search">
        <AiOutlineSearch size={30} />
      </StyledLink>
      <StyledLink to="/path-list"> 
        <AiOutlineMenu size={30} />
      </StyledLink>
      
      <CenterButton>
        <StyledLink to="/">
          <HomeImage src="client/public/logo.png" alt="Home Button" />
        </StyledLink>
      </CenterButton>
      
      <StyledLink to="/shuttle">
        <AiOutlineCar size={30} />
      </StyledLink>
      <StyledLink to="/favorite"> {/* 즐겨찾기 페이지로 이동 */}
        <AiOutlineStar size={30} />
      </StyledLink>
    </NavBarContainer>
  );
}

export default NavBar;
