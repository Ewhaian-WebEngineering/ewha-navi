import React from 'react';
import { Link } from 'react-router-dom';  
import styled from 'styled-components';
import SearchIcon from "../../images/NavBar/SearchIcon.svg";
import ListIcon from "../../images/NavBar/ListIcon.svg";
import ShuttleIcon from "../../images/NavBar/ShuttleIcon.svg";
import FavoriteIcon from "../../images/NavBar/FavoriteIcon.svg";
import LogoIcon from "../../images/NavBar/LogoIcon.svg"; 

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <LeftIconsContainer>
          <StyledLink to="/search">
            <IconImage src={SearchIcon} alt="Search Icon" />
          </StyledLink>
          <StyledLink to="/path-list">
            <IconImage src={ListIcon} alt="List Icon" />
          </StyledLink>
        </LeftIconsContainer>

        <CenterButtonWrapper>
            <HomeImage src={LogoIcon} alt="Center Button" />
        </CenterButtonWrapper>

        <RightIconsContainer>
          <StyledLink to="/shuttle">
            <IconImage src={ShuttleIcon} alt="Shuttle Icon" />
          </StyledLink>
          <StyledLink to="/favorite">
            <IconImage src={FavoriteIcon} alt="Favorite Icon" />
          </StyledLink>
        </RightIconsContainer>
      </NavBarContainer>
    </>
  );
}

export default NavBar;

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

const IconImage = styled.img`
  width: 30px;
  height: 30px;
`;

const CenterButtonWrapper = styled.div`
  position: fixed;
  bottom: 30px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100; 
`;

const HomeImage = styled.img`
  width: 60px; 
  height: 60px;
  &::after {
    content: '';
    position: absolute;
    bottom: -8px; /* 그림자가 보이도록 아래로 약간 이동 */
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 10px;
    background: rgba(0, 0, 0, 0.3);
    filter: blur(30px);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
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
