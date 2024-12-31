
import React from "react";
import styled from "styled-components";
import SmallStarIcon from "../../utils/icons/SmallStarIcon.svg";


const ReviewRoadImageIntro = (props)=>{
    return<>
    <GradationBox>
        <RoadInfoBox>
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