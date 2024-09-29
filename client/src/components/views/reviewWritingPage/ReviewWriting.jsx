import React from "react";
import { useState, useEffect } from "react";
import ReviewWritingHeader from "./ReviewWritingHeader";
import ReviewRoadImgIntro from "./ReviewRoadImgIntro";
import MakeReviewStar from "./MakeReveiwStar";
import {ReviewContainer, ReviewForm, ReviewWriteBox, ReviewHr, WriteInputBox, WriteUploadBtn} from "./ReviewWritingStyle";
import ReviewDataBox from "./ReviewDataBox";

// 지름길 리뷰 페이지입니다.
const ReviewWriting = ()=>{
    // db에서 해당길 정보 불러오는 부분 필요
    // db에서 해당 길에 대한 리뷰들 불러오는 부분 필요
    // db에서 해당 길에 대한 리뷰 별점 평균 계산하는 부분 필요

    // 해당 지름길에 대한 정보 표시
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
            <ReviewWritingHeader />
        
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

export default ReviewWriting;