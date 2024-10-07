import React from "react";
import Header from "../../utils/header/Header2";
import styled from "styled-components";
import 즐겨찾기채워짐 from "../../images/Search/즐겨찾기채워짐.svg"; // 채워진 별 이미지 추가
import { useNavigate } from "react-router-dom";

const Favorite = ({ favoritePaths = [], toggleFavorite }) => {
  const navigate = useNavigate();

  const handleReviewButtonClick = (pathId) => {
    navigate(`/review-write/${pathId}`);
  };

  return (
    <>
      <Header title="즐겨찾기 목록" />
      <Container>
        {favoritePaths.length > 0 ? (
          favoritePaths.map((path) => (
            <PathCard key={path.id}>
              <ImagePlaceholder />
              <DetailsAndStarContainer>
                <PathDetails>
                  <PathName>{path.name}</PathName>
                  <PathLocation>{path.location}</PathLocation>
                  <Rating>★ {path.rating}</Rating>
                </PathDetails>
                <Star onClick={() => toggleFavorite(path.id)}>
                  <img src={즐겨찾기채워짐} alt="즐겨찾기" />
                </Star>
              </DetailsAndStarContainer>
              <ReviewButton onClick={() => handleReviewButtonClick(path.id)}>
                리뷰 보기
              </ReviewButton>
            </PathCard>
          ))
        ) : (
          <NoFavoritesText>즐겨찾기한 지름길이 없습니다.</NoFavoritesText>
        )}
      </Container>
    </>
  );
};

export default Favorite;

const Container = styled.div`
  padding: 16px;
  background-color: #0f3d2b;
  min-height: 100vh;
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

const ImagePlaceholder = styled.div`
  width: 90px;
  height: 90px;
  background-color: #ddd;
  margin-left: 10px;
`;

const DetailsAndStarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  margin-left: 20px;
`;

const PathDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PathName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const PathLocation = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 2px;
`;

const Rating = styled.div`
  font-size: 12px;
  color: #0f3d2b;
  margin-top: 2px;
`;

const Star = styled.div`
  cursor: pointer;
  align-self: flex-start;
  margin-top: 5px;
  margin-left: 40px;
`;

const ReviewButton = styled.button`
  background-color: #0f3d2b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 60px;
  margin-right: 10px;
`;

const NoFavoritesText = styled.div`
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
`;
