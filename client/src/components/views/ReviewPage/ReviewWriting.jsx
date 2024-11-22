import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ReviewWritingHeader from "../../utils/Header/Header2";
import ReviewRoadImgIntro from "./ReviewRoadImgIntro";
import MakeReviewStar from "./MakeReveiwStar";
import ReviewDataBox from "./ReviewDataBox";
import styled from "styled-components";

const ReviewWriting = () => {
  const location = useLocation();
  const [roadName, setRoadName] = useState("");
  const [roadId, setRoadId] = useState();
  const [building, setBuilding] = useState(["출발", "도착"]);
  const [ratingAverage, setRatingAverage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ratingNum, setRatingNum] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [resetStars, setResetStars] = useState(0); // 별점 초기화를 위한 상태

  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    // location에서 전달받은 데이터 처리
    if (location.state) {
      const { id, roadName, start, end } = location.state;
      setRoadName(roadName);
      setRoadId(id);
      setBuilding([start, end]);
    }

    // URL 쿼리 파라미터 처리
    const params = new URLSearchParams(window.location.search);
    const roadQuery = params.get("roadName");
    if (roadQuery) setRoadName(roadQuery);
  }, [location]);

  useEffect(() => {
    if (!roadName) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/review-write/get`, {
          params: { roadName },
        });

        if (response.data.length === 0) {
          setReviews([]);
          setRatingAverage(0);
        } else {
          setReviews(response.data);
          const averageRating =
            response.data.reduce((sum, review) => sum + review.rating, 0) /
            response.data.length;
          setRatingAverage(averageRating.toFixed(2));
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchReviews();
  }, [roadName, updateUI]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ratingNum || !reviewText) {
      alert("별점과 리뷰 내용을 모두 작성해주세요.");
      return;
    }

    try {
      await axios.post(`${baseURL}/api/review-write/save`, {
        roadName,
        rating: ratingNum,
        reviewText,
      });

      // 별점 및 리뷰 텍스트 초기화
      setReviewText("");
      setRatingNum(0);
      setResetStars((prev) => prev + 1); // 별점 초기화 트리거
      setReviews((prevReviews) => [
        { rating: ratingNum, reviewText, _id: Date.now() },
        ...prevReviews,
      ]);
      setUpdateUI(!updateUI);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("리뷰 제출에 실패했습니다.");
    }
  };

  const onChangeReviewNum = (value) => setRatingNum(value);

  return (
    <>
      <ReviewWritingHeader title="지름길 리뷰" />
      <ReviewRoadImgIntro
        roadName={roadName}
        building={building}
        rating={ratingAverage}
      />
      <ReviewContainer>
        <div className="review-writing-box">
          <MakeReviewStar
            onChangeReviewNum={onChangeReviewNum}
            resetTrigger={resetStars} // 별점 초기화를 위한 prop 추가
          />
          <ReviewWriteBox>
            <ReviewForm onSubmit={handleSubmit}>
              <WriteInputBox
                type="text"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="  해당 길에 관해 자유롭게 적어보세요."
              />
              <WriteUploadBtn type="submit">리뷰 등록</WriteUploadBtn>
            </ReviewForm>
          </ReviewWriteBox>
          <ReviewHr />
        </div>
        <div>
          {loading ? (
            <div>로딩 중...</div>
          ) : (
            reviews.map((review) => (
              <ReviewDataBox
                key={review._id}
                id={review._id}
                ratingData={review.rating}
                textData={review.reviewText}
              />
            ))
          )}
        </div>
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f3d2b;
  max-width: 415px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  margin-bottom: 60px;
`;

const ReviewWriteBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const WriteInputBox = styled.input`
  font-family: "Pretendard";
  width: 246px;
  height: 40px;
`;

const ReviewForm = styled.form`
  display: flex;
  justify-content: center;
`;

const WriteUploadBtn = styled.button`
  color: #ffff;
  width: 84px;
  height: 40px;
  padding: 0;
  margin: 0;
  background: linear-gradient(360deg, #116846 0%, #358868 100%);
  border-radius: 0px 4px 4px 0px;
  border: 0;
`;

const ReviewHr = styled.hr`
  margin-top: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export default ReviewWriting;
