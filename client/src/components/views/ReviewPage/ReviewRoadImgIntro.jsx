import React from "react";
import styled from "styled-components";
import SmallStarIcon from "../../utils/icons/SmallStarIcon.svg";


const ReviewRoadImageIntro = (props)=>{
    return<>
    <GradationBox>
        <RoadInfoBox>
            {/* 이미지 렌더링 추가 */}
          {/* <img 
          src={props.imageSrc || "/images/shortcuts/defaultImage.png"} 
          alt={`${props.roadName} 이미지`} 
          style={{
            width: "100px", // 이미지가 가로로 꽉 차도록 설정
            height: "100px", // 비율 유지
            objectFit: "cover", 
            borderRadius: "10px", // 둥근 모서리 (선택사항)
            marginBottom: "10px" // 간격
          }}
          /> */}










            <RoadTitle>{props.roadName}</RoadTitle>
            <RoadStartEnd>({props.start}) -  ({props.end})</RoadStartEnd>
        </RoadInfoBox>
        <RatingBox>
            <div><img src={SmallStarIcon} alt = "smallstar"/></div>
            <RatingNum>{props.rating}</RatingNum>
        </RatingBox>
    </GradationBox>
    </>
}

const GradationBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 40vh;
    bottom: 0;
    top: 0;
    right: 0;
    max-width: 390px;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), #D9D9D9;
`;

const RoadInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 40px;
    color: #0F3D2B;
    margin-bottom: 5px;
    align-items: flex-end;
`;

const RatingBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 40px;
    margin-bottom: 20px;
`;

const RoadTitle = styled.div`
    font-family: 'Pretendard-Bold';
    font-size: 20px;
`;


const RoadStartEnd = styled.div`
    font-family: 'Pretendard';
    color: #0F3D2B;
    margin-left: 10px;
    font-size: 14px;
    padding: 0px;
`;

const RatingNum = styled.div`
    margin-left : 5px;
`;



export default ReviewRoadImageIntro;