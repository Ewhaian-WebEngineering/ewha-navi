import React, { useState } from "react";
import Header from "../../utils/Header/Header";
import styled from "styled-components";
import NextArrow from "../../images/PathListPage/NextArrow.svg";
import FilledStar from "../../images/PathListPage/FilledStar.svg";
import UnfilledStar from "../../images/PathListPage/UnfilledStar.svg";
import WalkingBridge from "../../images/PathListPage/walkingBridge.jpg";
import { useNavigate } from "react-router-dom";
import KakaoMap from "../KakaoMap/KakaoMap";

const Container = styled.div`
  padding: 16px;
  padding-bottom: 90px;
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
  color: ${({ isClicked }) => (isClicked ? "white" : "#0F3D2B")};
  border: none;
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
  color: ${({ isClicked }) => (isClicked ? "white" : "#0F3D2B")};
  border: none;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 100;
  margin-right: 90px;
`;

const PathListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PathCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 100%;
  min-height: 120px;
`;

const ImagePlaceholder = styled.img`
  width: 90px;
  height: 90px;
  background-color: #ddd;
  margin-left: 10px;
  border-radius: 8px;
`;

const PathDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
  margin-left: 0;
`;

const PathName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: -10px;
  margin-left: 0;
`;

const PathLocation = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 2px;
  margin-left: 0;
`;

const Rating = styled.div`
  font-size: 12px;
  color: #0f3d2b;
  margin-top: 2px;
  margin-left: 0;
`;

const StarAndReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
  margin-right: 10px;
`;

const Star = styled.div`
  cursor: pointer;
  align-self: flex-start;
  margin-top: 25px;
  margin-left: 50px;
`;

const ReviewButton = styled.button`
  background-color: #0f3d2b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const ArrowImage = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 7px;
  margin-top: 5px;
`;

const PathMapContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #0f3d2b;
  font-size: 16px;
`;

const PathList = () => {
  const navigate = useNavigate();
  const [isViewButtonClicked, setIsViewButtonClicked] = useState(false);
  const [starredPaths, setStarredPaths] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritePaths")) || [];
    return storedFavorites;
  });

  const handleViewButtonClick = () => {
    setIsViewButtonClicked(true);
  };

  const handleListButtonClick = () => {
    setIsViewButtonClicked(false);
  };

  

  const handleStarClick = (index) => {
    const updatedFavorites = [...starredPaths];
    if (updatedFavorites.includes(index)) {
      updatedFavorites.splice(updatedFavorites.indexOf(index), 1);
    } else {
      updatedFavorites.push(index);
    }
    setStarredPaths(updatedFavorites);
    localStorage.setItem("favoritePaths", JSON.stringify(updatedFavorites));
  };

  const paths = [
    { id: 1, name: "포도길", location: "포스코관 - 도서관", rating: 4.8 },
    { id: 2, name: "수영장길", location: "생활관 - SK 텔레콤관", rating: 4.5 },
    { id: 3, name: "징공다리", location: "신공학관 - 연구협력관", rating: 4.6 },
    { id: 4, name: "포관 - 종과길", location: "포스코관 - 종합과학관", rating: 4.7 },
    { id: 5, name: "헬렌관길", location: "헬렌관 - 중앙도서관", rating: 5.0 },
    { id: 6, name: "기숙사길", location: "종합과학관 - 기숙사", rating: 4.6 },
    { id: 7, name: "공대 쪽문길", location: "아산공학관 - 공대쪽문", rating: 4.6 },
  ];
  const handleReviewButtonClick = (roadName) => {
    window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
    navigate(`/review-write?roadName=${roadName}`);
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

        {!isViewButtonClicked ? (
          <PathListContainer>
            {paths.map((path, index) => (
              <PathCard key={path.id}>
                <ImagePlaceholder src={path.name === "징공다리" ? WalkingBridge : ""} alt="path image" />
                <PathDetails>
                  <PathName>{path.name}</PathName>
                  <PathLocation>{path.location}</PathLocation>
                  <Rating>★ {path.rating}</Rating>
                </PathDetails>
                <StarAndReviewContainer>
                  <Star onClick={() => handleStarClick(index)}>
                    <img
                      src={starredPaths.includes(index) ? FilledStar : UnfilledStar}
                      alt="즐겨찾기"
                    />
                  </Star>
                  <ReviewButton onClick={() => handleReviewButtonClick(path.name)}>
                    리뷰 보기
                    <ArrowImage src={NextArrow} alt="arrow icon" />
                  </ReviewButton>
                </StarAndReviewContainer>
              </PathCard>
            ))}
          </PathListContainer>
        ) : (
          <PathMapContainer>
            <KakaoMap />
          </PathMapContainer>
        )}
      </Container>
    </>
  );
};

export default PathList;
