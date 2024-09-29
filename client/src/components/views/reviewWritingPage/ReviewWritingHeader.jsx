// 리뷰 작성 페이지의 헤더
import React from "react";
import {useNavigate} from "react-router-dom";
import {HeaderBar, GoBackBtn, EmptyBox, ReviewBarName} from "./ReviewWritingHeaderStyle";
import GoBackIcon from "./icons/GoBackIcon.svg";


const ReviewWritingHeader = ()=>{
    const navigate = useNavigate();

    const goBack = ()=>{
        navigate(-1);
    };

    return <>
    <HeaderBar>
    <GoBackBtn onClick={goBack}><img src={GoBackIcon} alt="gobackicon"></img></GoBackBtn>
    <ReviewBarName>지름길 리뷰</ReviewBarName>
    <EmptyBox></EmptyBox>
    </HeaderBar>
    </>
}

export default ReviewWritingHeader;