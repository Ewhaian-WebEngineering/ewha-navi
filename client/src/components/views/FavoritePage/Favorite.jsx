import React, { useState, useEffect } from "react";
import Header from "../../utils/header/Header";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import NextArrowIcon from "../../utils/icons/NextArrow.png";

const PathList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isViewButtonClicked = location.pathname === "/path-map";

  const [favoritePaths, setFavoritePaths] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritePaths(storedFavorites);
  }, []);

  const handleViewButtonClick = () => {
    navigate("/path-map");
  };

  const handleListButtonClick = () => {
    navigate("/path-list");
  };

  const handleReviewButtonClick = () => {
    navigate("/review-write");
  };

  const toggleFavorite = (path) => {
    setFavoritePaths((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === path.id);
      let updatedFavorites;
      if (isFavorite) {
        updatedFavorites = prevFavorites.filter((item) => item.id !== path.id);
      } else {
        updatedFavorites = [...prevFavorites, path];
      }
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const paths = [
    { id: 1, name: "포도길", location: "포스코관 - 도서관", rating: 4.8 },
    { id: 2, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
    { id: 3, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
    { id: 4, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
  ];

  // 즐겨찾기된 항목만 필터링하여 보여줌
  const favoriteOnlyPaths = paths.filter((path) =>
    favoritePaths.some((item) => item.id === path.id)
  );

  return (
    <>
      <Header title="즐겨찾기" />
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

        <PathListContainer>
          {favoriteOnlyPaths.length > 0 ? (
            favoriteOnlyPaths.map((path) => (
              <PathCard key={path.id}>
                <ImagePlaceholder />
                <PathDetails>
                  <PathName>{path.name}</PathName>
                  <PathLocation>{path.location}</PathLocation>
                  <Rating>★ {path.rating}</Rating>
                </PathDetails>
                <FavoriteButton
                  isFavorite={true} // 즐겨찾기된 항목만 표시되므로 항상 채워진 별
                  onClick={() => toggleFavorite(path)}
                >
                  ★
                </FavoriteButton>
                <ReviewButton onClick={handleReviewButtonClick}>
                  리뷰 보기
                  <ArrowImage src={NextArrowIcon} alt="arrow icon" />
                </ReviewButton>
              </PathCard>
            ))
          ) : (
            <NoFavoritesText>즐겨찾기한 경로가 없습니다.</NoFavoritesText>
          )}
        </PathListContainer>
      </Container>
    </>
  );
};

export default PathList;

// Define the styled-components here:

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
  color: ${({ isClicked }) => (isClicked ? "white" : "#0F3D2B")};
  border: ${({ isClicked }) => (isClicked ? "none" : "none")};
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
  border: ${({ isClicked }) => (isClicked ? "none" : "none")};
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
  align-items: flex-start;
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

const PathDetails = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  justify-content: flex-start;
  padding-top: 0;
`;

const PathName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: -30px;
`;

const PathLocation = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 5px;
`;

const Rating = styled.div`
  font-size: 12px;
  color: #0F3D2B;
  margin-top: 3px;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #ffcc00; /* 채워진 별은 항상 노란색 */
  cursor: pointer;
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

const ArrowImage = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 7px;
`;

const NoFavoritesText = styled.div`
  color: white;
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
`;
