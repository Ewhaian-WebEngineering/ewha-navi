import React, { useState } from "react";
import Header from "../../utils/Header/Header";
import styled from "styled-components";
import NextArrow from "../../images/PathListPage/NextArrow.svg";
import FilledStar from "../../images/PathListPage/FilledStar.svg";
import UnfilledStar from "../../images/PathListPage/UnfilledStar.svg";
import WalkingBridge from "../../images/PathListPage/walkingBridge.jpg";
import { useNavigate } from "react-router-dom";
import KakaoMap from "../KakaoMap/KakaoMap";
import { useEffect } from "react";
import axios from "axios";
import paths from "../SearchPage/paths.json";
import paths1 from "../SearchPage/paths1.json";
import paths2 from "../SearchPage/paths2.json";
import paths3 from "../SearchPage/paths3.json";

import mainGate from "../../images/shortcuts/mainGate.png";
import backGate from "../../images/shortcuts/backGate.png";
import poscoAsan from "../../images/shortcuts/poscoAsan.png";
import business from "../../images/shortcuts/business.png";
import asan from "../../images/shortcuts/asan.png";
import asanBusiness from "../../images/shortcuts/asanBusiness.png";
import podo from "../../images/shortcuts/podo.png";
import hakEcc from "../../images/shortcuts/hakEcc.png";








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
  margin-left: 10px;
  width: 150px;
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
  display: flex;
  justify-content: center;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
  &:hover {
    background-color: #45a049; /* 호버 시 색상 변경 */
  }
`;

const ArrowImage = styled.img`
  width: 10%;
  height: 100%;
  margin-left: 7px;
  margin-top: 3px;
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
  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const [isViewButtonClicked, setIsViewButtonClicked] = useState(false);
  const [starredPaths, setStarredPaths] = useState(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoritePaths")) || [];
    return storedFavorites;
  });

  const handleViewButtonClick = () => {
    setIsViewButtonClicked(true);
  };

  const handleListButtonClick = () => {
    setIsViewButtonClicked(false);
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

  // 모든 경로 데이터 통합
  const allPathsData = [...paths, ...paths1, ...paths2, ...paths3];

  // 경로 데이터 변환
  const pathsList = allPathsData.map((path, index) => ({
    id: index + 1,
    name: path.path_name,
    start: path.start_building,
    end: path.end_building,
    rating: 0, // 초기 rating 값은 0으로 설정
  }));

  const handleReviewButtonClick = (e, path) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
    navigate(`/review-write`, {
      state: {
        id: path.id,
        roadName: path.name,
        start: path.start,
        end: path.end,
      },
    });
  };
  const [averageRatings, setAverageRatings] = useState({});
  useEffect(() => {
    const fetchAverageRatings = async () => {
      try {
        const roadNames = pathsList.map((path) => path.name); // 모든 roadName 추출
        const response = await axios.post(
          `${baseURL}/api/reviews/average-ratings`,
          { roadNames }
        );
        setAverageRatings(response.data); // API에서 가져온 평균 별점을 상태에 저장
      } catch (error) {
        console.error("Error fetching average ratings:", error);
      }
    };

    fetchAverageRatings();
  }, []);

  const handlePathClick = (path) => {
    navigate("/search", {
      state: {
        departure: path.start,
        arrival: path.end,
        showPathDetails: true,
      },
    });
  };

  const imageMapping = {
    "정문-기숙사": mainGate,
    "후문-기숙사": backGate,
    "정문-학생문화관":mainGate,
    "포스코관-아산공학관":poscoAsan,
    "신세계관-중앙도서관":business,
    "아산공학관-법학관":asan,
    "아산공학관-신세계관":asanBusiness,
    "포도길":podo,
    "학관-ECC":hakEcc,
    "신세계관-ECC":business,
    
    "신세계관-포스코관":mainGate,
    "ECC-생활환경관":mainGate,
    "포스코관-학관":mainGate,
    "포스코관-종합과학관":mainGate,
    "아산공학관-연구협력관":mainGate,
    "종합과학관-음악관":mainGate,
    "기숙사-음악관":mainGate,
    "신세계관-생활환경관":mainGate,
    "아산공학관-학관":mainGate,
    "학관-아산공학관":mainGate,
    "체육관-학관":mainGate,
    "학관-체육관":mainGate,
    "ECC-중앙도서관":mainGate,
    "중앙도서관-ECC":mainGate,

    "포스코관": "POSCO.png",
    "신세계관": "newHall.png",
    "아산 공학관": "AsanEngineering.png",
    "ECC": "ECC.png",
    "종합과학관": "jongScience.png",
    "기숙사": "Dormitory.png",
    "학관": "hakgwan.png",
    "체육관": "gym.png",
    "중앙 도서관": "centralLibrary.png",
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
            학교 지도 보기
          </ViewButton>
        </ButtonContainer>

       









        {!isViewButtonClicked ? (
          <PathListContainer>
            {pathsList.map((path, index) => (
              <PathCard key={path.id} onClick={() => handlePathClick(path)}>
                <ImagePlaceholder
                   src={imageMapping[path.name] || mainGate} 
                   alt={`${path.name} image`}
                />
                <PathDetails>
                  <PathName>{path.name}</PathName>
                  <PathLocation>
                    {path.start} - {path.end}
                  </PathLocation>
                  <Rating>★ {averageRatings[path.name] || "0"}</Rating>
                </PathDetails>
                <StarAndReviewContainer>
                  <Star onClick={(e) => handleStarClick(e, index)}>
                    <img
                      src={
                        starredPaths.includes(index) ? FilledStar : UnfilledStar
                      }
                      alt="즐겨찾기"
                    />
                  </Star>
                  <ReviewButton
                    onClick={(e) => handleReviewButtonClick(e, path)}
                  >
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
