import React from "react";
import styled from "styled-components";
import Header from "../../utils/header/Header";
import { useNavigate, useLocation } from "react-router-dom";

const PathMap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isViewButtonClicked = location.pathname === "/path-map";

  const handleViewButtonClick = () => {
    navigate("/path-map");
  };

  const handleListButtonClick = () => {
    navigate("/path-list");
  };

  return (
    <>
      <Header title="지름길 목록 / 리뷰" />
      <Container>
        <ButtonContainer>
          <ListButton
            isClicked={!isViewButtonClicked}
            onClick={handleListButtonClick}
          >
            지름길 목록
          </ListButton>
          <ViewButton
            isClicked={isViewButtonClicked}
            onClick={handleViewButtonClick}
          >
            지름길 한 눈에 보기
          </ViewButton>
        </ButtonContainer>

        {/* 나머지 PathMap 페이지 내용 */}
      </Container>
    </>
  );
};

export default PathMap;

const Container = styled.div`
  padding: 16px;
  background-color: #0f3d2b;
  min-height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 30px;
  gap: 5px; 
`;

const ListButton = styled.button`
  background: ${({ isClicked }) =>
    isClicked
      ? "linear-gradient(to bottom, #358868 0%, #116846 100%)"
      : "white"};
  color: ${({ isClicked }) => (isClicked ? "white" : "#0F3D2B")}; /* 비활성화 시 폰트 색을 검은색으로 변경 */
  border: ${({ isClicked }) => (isClicked ? "none" : "none")}; /* 비활성화 시 테두리를 없앰 */
  padding: 5px 20px; 
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 100;
  margin-left: 10px;
`;

const ViewButton = styled.button`
  background: ${({ isClicked }) =>
    isClicked
      ? "linear-gradient(to bottom, #116846 0%, #358868 100%)"
      : "white"};
  color: ${({ isClicked }) => (isClicked ? "white" : "#0F3D2B")}; /* 비활성화 시 폰트 색을 검은색으로 변경 */
  border: ${({ isClicked }) => (isClicked ? "none" : "none")}; /* 비활성화 시 테두리를 없앰 */
  padding: 5px 20px; 
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 100;
  margin-right: 90px;
`;