import React, { useState, useEffect } from "react";
import ReviewWritingHeader from "../../utils/Header/Header2";
import ReviewRoadImgIntro from "./ReviewRoadImgIntro";
import MakeReviewStar from "./MakeReveiwStar";
import ReviewDataBox from "./ReviewDataBox";
import styled from "styled-components";
import axios from "axios";

const ReviewWriting = () => {
  const [roadName, setRoadName] = useState("지름길 이름");
  const [building, setBuilging] = useState(["출발", "도착"]);
  const [ratingAverage, setRatingAverage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [ratingNum, setRatingNum] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [resetStars, setResetStars] = useState(0); // 별점 초기화를 위한 상태

  const params = new URLSearchParams(window.location.search);
  const roadQuery = params.get('roadName');
  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    // 페이지 로드시 스크롤 맨 위로
    window.scrollTo(0, 0);
    
    setRoadName(roadQuery);
    setRatingNum(0);
    axios.get(`${baseURL}/api/review-write/get?roadName=${roadQuery}`)
      .then(response => {
        if (response.data.length < 1) {
          setRatingAverage(0);
        } else {
          setReviews(response.data);
          const averageRating = response.data.reduce((sum, review) => sum + review.rating, 0) / response.data.length;
          setRatingAverage(averageRating.toFixed(2));
        }
      })
      .catch(error => console.error(error));
  }, [updateUI, roadQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/api/review-write/save?roadName=${roadQuery}`, {
        rating: ratingNum,
        reviewText: reviewText
      });
      setReviewText("");
      setRatingNum(0);
      setResetStars(prev => prev + 1); // 별점 초기화 트리거
      setUpdateUI(!updateUI);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const onChangeReviewNum = (value) => setRatingNum(value);

  return (
    <>
      <ReviewWritingHeader title="지름길 리뷰"/>
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
          {reviews.map(review =>
            <ReviewDataBox
              key={review._id}
              id={review._id}
              ratingData={review.rating}
              textData={review.reviewText}
            />
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
    background-color: #0F3D2B;
    max-width: 415px;
    height: 100dvh;
    margin-left: auto;
    margin-right: auto;
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
    color: #FFFF;
    width: 84px;
    height: 40px;
    padding: 0;
    margin: 0;
    background: linear-gradient(360deg, #116846 0%, #358868 100%);
    border-radius: 0px 4px 4px 0px;
    border: 0;
`;

const ReviewHr = styled.hr`
    margin-top : 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
`;



export default ReviewWriting;