import React from 'react';
import { Link } from 'react-router-dom';  
import styled from 'styled-components';
import searchIcon from "../../images/NavBar/search.svg";
import listIcon from "../../images/NavBar/list.svg";
import shuttleIcon from "../../images/NavBar/shuttle.svg";
import favoriteIcon from "../../images/NavBar/favorite.svg";
import homeIcon from "../../images/NavBar/home.svg"; // 육각형 모양의 홈 아이콘 추가

function NavBar() {
  return (
    <>
      <NavBarContainer>
        <LeftIconsContainer>
          <StyledLink to="/search">
            <IconImage src={searchIcon} alt="Search Icon" />
          </StyledLink>
          <StyledLink to="/path-list">
            <IconImage src={listIcon} alt="List Icon" />
          </StyledLink>
        </LeftIconsContainer>

        <CenterButtonWrapper>
            <HomeImage src={homeIcon} alt="Home Button" />
        </CenterButtonWrapper>

        <RightIconsContainer>
          <StyledLink to="/shuttle">
            <IconImage src={shuttleIcon} alt="Shuttle Icon" />
          </StyledLink>
          <StyledLink to="/favorite">
            <IconImage src={favoriteIcon} alt="Favorite Icon" />
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
    filter: blur(30px); /* 그림자 효과 */
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
