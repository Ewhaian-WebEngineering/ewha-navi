import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "../../utils/Header/Header";
import NextArrow from "../../images/PathListPage/NextArrow.svg";
import FilledStar from "../../images/PathListPage/FilledStar.svg";
import UnfilledStar from "../../images/PathListPage/UnfilledStar.svg";
import WalkingBridge from "../../images/PathListPage/walkingBridge.jpg";

// Styled components
const Container = styled.div`
  padding: 16px;
  padding-bottom: 90px;
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

const Favorite = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 위치 정보 가져오기

  const [starredPaths, setStarredPaths] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritePaths")) || [];
    return storedFavorites;
  });

  const [allPaths, setAllPaths] = useState([
    { id: 1, name: "포도길", location: "포스코관 - 도서관", rating: 4.8 },
    { id: 2, name: "수영장길", location: "생활관 - SK 텔레콤관", rating: 4.5 },
    { id: 3, name: "징공다리", location: "신공학관 - 연구협력관", rating: 4.6 },
    { id: 4, name: "포관 - 종과길", location: "포스코관 - 종합과학관", rating: 4.7 },
    { id: 5, name: "헬렌관길", location: "헬렌관 - 중앙도서관", rating: 5.0 },
    { id: 6, name: "기숙사길", location: "종합과학관 - 기숙사", rating: 4.6 },
    { id: 7, name: "공대 쪽문길", location: "아산공학관 - 공대쪽문", rating: 4.6 },
  ]);

  const fetchRatings = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/ratings?_=${new Date().getTime()}`
      );
      console.log("API Response:", response.data); // API 응답 디버깅
      if (response.data && Array.isArray(response.data)) {
        setAllPaths((prevPaths) =>
          prevPaths.map((path) => {
            const updatedPath = response.data.find((data) => data.name === path.name);
            return updatedPath ? { ...path, rating: updatedPath.rating } : path;
          })
        );
      }
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  }, []);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  
useEffect(() => {
  if (location.state?.updated) {
    console.log("Location state updated: refreshing ratings...");
    fetchRatings();
  }
}, [location, fetchRatings]);

 


const handleReviewButtonClick = (path) => {
    navigate("/review-write", {
      state: { roadName: path.name, rating: path.rating },
    });
  };

  const favoritePaths = useMemo(() => {
    return starredPaths.map((index) => allPaths[index]).filter(Boolean);
  }, [starredPaths, allPaths]);







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





  return (
    <>
      <Header title="즐겨찾기" />
      <Container>
        {favoritePaths.length > 0 ? (
          <PathListContainer>
            {favoritePaths.map((path, index) => (
              <PathCard key={path.id}>
                <ImagePlaceholder src={path.name === "징공다리" ? WalkingBridge : ""} alt="path image" />
                <PathDetails>
                  <PathName>{path.name}</PathName>
                  <PathLocation>{path.location}</PathLocation>
                  <Rating>★ {path.rating.toFixed(2)}</Rating>
                </PathDetails>
                <StarAndReviewContainer>
                 

                <Star onClick={() => handleStarClick(allPaths.indexOf(path))}>
                    <img
                      src={starredPaths.includes(allPaths.indexOf(path)) ? FilledStar : UnfilledStar}
                      alt="즐겨찾기"
                    />
                  </Star>
                 
                  <ReviewButton onClick={() => handleReviewButtonClick(path)}>
                    리뷰 보기
                    <ArrowImage src={NextArrow} alt="arrow icon" />
                  </ReviewButton>
                </StarAndReviewContainer>
              </PathCard>
            ))}
          </PathListContainer>
        ) : (
          <PathMapContainer>
            <h5>즐겨찾기된 지름길이 없습니다.</h5>
          </PathMapContainer>
        )}
      </Container>
    </>
  );
};

export default Favorite;
