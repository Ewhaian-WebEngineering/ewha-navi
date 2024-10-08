import React from "react";
import { useState, useEffect } from "react";
import ReviewWritingHeader from "../../utils/Header/Header2";
import ReviewRoadImgIntro from "./ReviewRoadImgIntro";
import MakeReviewStar from "./MakeReveiwStar";
import ReviewDataBox from "./ReviewDataBox";
import styled from "styled-components";

// 지름길 리뷰 페이지입니다.
const ReviewWriting = ()=>{
    // db에서 해당길 정보 불러오는 부분 필요
    // db에서 해당 길에 대한 리뷰들 불러오는 부분 필요
    // db에서 해당 길에 대한 리뷰 별점 평균 계산하는 부분 필요

    // 해당 지름길에 대한 정보 표시
    // 쿼리로 roadName 받아오면 될 것 같음
    const [roadName, setRoadName] = useState("지름길 이름");
    const [building, setBuilging] = useState(["출발", "도착"]);
    const [ratingAverage, setRatingAverage] = useState(4.8);

    // 리뷰 작성 시 등록할 별점과 리뷰 내용
    const [ratingNum, setRatingNum] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const onChangeReviewNum = function (params){
        setRatingNum(params);
    };
    // 
    return (
        <>
            <ReviewWritingHeader title="지름길 리뷰"/>
        
        <ReviewRoadImgIntro 
        roadName = {roadName} 
        building= {building} rating={ratingAverage}/>
        <ReviewContainer>
            <div className="review-writing-box">
                <MakeReviewStar onChangeReviewNum={onChangeReviewNum}/>
                <ReviewWriteBox>
                    <ReviewForm><WriteInputBox placeholder="  해당 길에 관해 자유롭게 적어보세요."/>
                    <WriteUploadBtn>리뷰 등록</WriteUploadBtn>
                    </ReviewForm>
                </ReviewWriteBox>
                <ReviewHr />
            </div>
            <div>
                <ReviewDataBox
                    ratingData={4}
                    textData="나중에 데이터가 들어가면 map 통해서 구현할 내용입니다!!!!"
                >
                </ReviewDataBox>

                <ReviewDataBox
                    ratingData={4}
                    textData="나중에 데이터가 들어가면 map 통해서 구현할 내용입니다!!!!"
                >
                </ReviewDataBox>
            </div>
            
        </ReviewContainer>
        </>
    )
}

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