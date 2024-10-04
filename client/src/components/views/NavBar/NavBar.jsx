import React from 'react';
import { Link } from 'react-router-dom';  
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { BiBus } from "react-icons/bi";
import { IoIosStarOutline } from "react-icons/io";
import logo from "../../images/NavBar/home-logo.svg"; 

const NavBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  height: 70px;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 24px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterButtonWrapper = styled.div`
  position: fixed;
  bottom: 30px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100; 
`;

const CenterButton = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background-color: #F8FFFB;
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.8);
`;

const HomeImage = styled.img`
  width: 33px;
  height: 33px;
`;

const LeftIconsContainer = styled.div`
  display: flex;
  gap: 40px; 
  margin-right: 80px; 
`;

const RightIconsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 60px; 
`;

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <LeftIconsContainer>
          <StyledLink to="/search">
            <AiOutlineSearch size={30} />
          </StyledLink>
          <StyledLink to="/path-list">
            <AiOutlineMenu size={30} />
          </StyledLink>
        </LeftIconsContainer>

        <CenterButtonWrapper>
          <CenterButton>
            <HomeImage src={logo} alt="Home Button" />
          </CenterButton>
        </CenterButtonWrapper>

        <RightIconsContainer>
          <StyledLink to="/shuttle">
            <BiBus size={30} />
          </StyledLink>
          <StyledLink to="/favorite">
            <IoIosStarOutline size={30} />
          </StyledLink>
        </RightIconsContainer>
      </NavBarContainer>
    </>
  );
}

export default NavBar;
