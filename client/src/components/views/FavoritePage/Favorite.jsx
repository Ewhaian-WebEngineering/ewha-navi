import React, { useState, useEffect } from "react";
import Header from "../../utils/Header/Header";
import styled from "styled-components";
import NextArrow from "../../images/PathListPage/NextArrow.svg";
import FilledStar from "../../images/PathListPage/FilledStar.svg";
import UnfilledStar from "../../images/PathListPage/UnfilledStar.svg"; 
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 16px;
  background-color: #0f3d2b;
  min-height: 100vh;
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

const ImagePlaceholder = styled.div`
  width: 90px;
  height: 90px;
  background-color: #ddd;
  margin-left: 10px;
`;

const PathDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
  margin-left:0
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


const Favorite = () => {
  const navigate = useNavigate();
  const [favoritePaths, setFavoritePaths] = useState([]);
  const [starredPaths, setStarredPaths] = useState([]);

  useEffect(() => {
    const paths = [
      { id: 1, name: "포도길", location: "포스코관 - 도서관", rating: 4.8 },
      { id: 2, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
      { id: 3, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
      { id: 4, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
    ];

    const storedFavorites = JSON.parse(localStorage.getItem("favoritePaths")) || [];
    const favoritePathList = paths.filter((_, index) => storedFavorites.includes(index));

    setFavoritePaths(favoritePathList);
    setStarredPaths(storedFavorites);
  }, []);

  const handleReviewButtonClick = () => {
    navigate("/review-write");
  };

  const toggleStar = (index) => {
    const updatedFavorites = [...starredPaths];
    if (updatedFavorites.includes(index)) {
      updatedFavorites.splice(updatedFavorites.indexOf(index), 1);
    } else {
      updatedFavorites.push(index);
    }

    setStarredPaths(updatedFavorites);
    localStorage.setItem("favoritePaths", JSON.stringify(updatedFavorites));

    const paths = [
      { id: 1, name: "포도길", location: "포스코관 - 도서관", rating: 4.8 },
      { id: 2, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
      { id: 3, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
      { id: 4, name: "지름길 이름", location: "장소 - 장소", rating: 4.8 },
    ];

    const favoritePathList = paths.filter((_, idx) => updatedFavorites.includes(idx));
    setFavoritePaths(favoritePathList);
  };

  return (
    <>
      <Header title="즐겨찾기 경로" />
      <Container>
        <PathListContainer>
          {favoritePaths.length > 0 ? (
            favoritePaths.map((path, index) => (
              <PathCard key={path.id}>
                <ImagePlaceholder />
                <PathDetails>
                  <PathName>{path.name}</PathName>
                  <PathLocation>{path.location}</PathLocation>
                  <Rating>★ {path.rating}</Rating>
                </PathDetails>
                <StarAndReviewContainer>
                  <Star onClick={() => toggleStar(index)}>
                    <img
                      src={starredPaths.includes(index) ? FilledStar : UnfilledStar}
                      alt="즐겨찾기"
                    />
                  </Star>
                  <ReviewButton onClick={handleReviewButtonClick}>
                    리뷰 보기
                    <ArrowImage src={NextArrow} alt="arrow icon" />
                  </ReviewButton>
                </StarAndReviewContainer>
              </PathCard>
            ))
          ) : (
            <div>즐겨찾기한 경로가 없습니다.</div>
          )}
        </PathListContainer>
      </Container>
    </>
  );
};

export default Favorite;
