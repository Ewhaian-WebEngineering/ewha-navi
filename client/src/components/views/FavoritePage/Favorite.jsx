import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../../utils/Header/Header";
import NextArrow from "../../images/PathListPage/NextArrow.svg";
import FilledStar from "../../images/PathListPage/FilledStar.svg";
import UnfilledStar from "../../images/PathListPage/UnfilledStar.svg";
import WalkingBridge from "../../images/PathListPage/walkingBridge.jpg";
import paths from "../SearchPage/paths.json";
import paths1 from "../SearchPage/paths1.json";
import paths2 from "../SearchPage/paths2.json";
import paths3 from "../SearchPage/paths3.json";

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
  cursor: pointer;
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
  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const [starredPaths, setStarredPaths] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritePaths")) || [];
    return storedFavorites;
  });

  const [averageRatings, setAverageRatings] = useState({});
  const [allPaths, setAllPaths] = useState([
    ...paths.map((path) => ({
      id: path.id,
      name: path.path_name,
      location: `${path.start_building} - ${path.end_building}`,
      start_building: path.start_building,
      end_building: path.end_building,
      rating: 0,
    })),
    ...paths1.map((path) => ({
      id: path.id,
      name: path.path_name,
      location: `${path.start_building} - ${path.end_building}`,
      start_building: path.start_building,
      end_building: path.end_building,
      rating: 0,
    })),
    ...paths2.map((path) => ({
      id: path.id,
      name: path.path_name,
      location: `${path.start_building} - ${path.end_building}`,
      start_building: path.start_building,
      end_building: path.end_building,
      rating: 0,
    })),
    ...paths3.map((path) => ({
      id: path.id,
      name: path.path_name,
      location: `${path.start_building} - ${path.end_building}`,
      start_building: path.start_building,
      end_building: path.end_building,
      rating: 0,
    })),
  ]);

  useEffect(() => {
    const fetchAverageRatings = async () => {
      try {
        const roadNames = allPaths.map((path) => path.name);
        const response = await axios.post(
          `${baseURL}/api/reviews/average-ratings`,
          { roadNames }
        );
        setAverageRatings(response.data); 
      } catch (error) {
        console.error("Error fetching average ratings:", error);
      }
    };

    fetchAverageRatings();
  }, [allPaths, baseURL]);

  const favoritePaths = useMemo(() => {
    return starredPaths.map((index) => allPaths[index]).filter(Boolean);
  }, [starredPaths, allPaths]);

  const handleReviewButtonClick = (e, path) => {
    e.stopPropagation();
    navigate("/review-write", {
      state: {
        roadName: path.name,
        rating: averageRatings[path.name] || 0,
      },
    });
  };

  const handleStarClick = (e, index) => {
    e.stopPropagation();
    const updatedFavorites = [...starredPaths];
    if (updatedFavorites.includes(index)) {
      updatedFavorites.splice(updatedFavorites.indexOf(index), 1);
    } else {
      updatedFavorites.push(index);
    }
    setStarredPaths(updatedFavorites);
    localStorage.setItem("favoritePaths", JSON.stringify(updatedFavorites));
  };

  const handlePathClick = (path) => {
    navigate("/search", {
      state: {
        departure: path.start_building,
        arrival: path.end_building,
        showPathDetails: true,
      },
    });
  };

  return (
    <>
      <Header title="즐겨찾기" />
      <Container>
        {favoritePaths.length > 0 ? (
          <PathListContainer>
            {favoritePaths.map((path, index) => (
              <PathCard key={path.id} onClick={() => handlePathClick(path)}>
                <ImagePlaceholder
                  src={path.name === "징공다리" ? WalkingBridge : ""}
                  alt="path image"
                />
                <PathDetails>
                  <PathName>{path.name}</PathName>
                  <PathLocation>{path.location}</PathLocation>
                  <Rating>★ {averageRatings[path.name] || "0"}</Rating>
                </PathDetails>
                <StarAndReviewContainer>
                  <Star onClick={(e) => handleStarClick(e, allPaths.indexOf(path))}>
                    <img
                      src={starredPaths.includes(allPaths.indexOf(path)) ? FilledStar : UnfilledStar}
                      alt="즐겨찾기"
                    />
                  </Star>
                  <ReviewButton onClick={(e) => handleReviewButtonClick(e, path)}>
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
