// 리뷰 작성 페이지의 헤더
import React from "react";
import {useNavigate} from "react-router-dom";
import "./ReviewWritingHeader.css";
import GoBackIcon from "./icons/GoBackIcon.svg";


const ReviewWritingHeader = ()=>{
    const navigate = useNavigate();

    const goBack = ()=>{
        navigate(-1);
    };

    return <>
    <div className= "header-bar">
    <div className="gobackbtn cursor" onClick={goBack}><img src={GoBackIcon} alt="gobackicon"></img></div>
    <div className = "review-bar-name">지름길 리뷰</div>
    <div className="gobackbtn"></div>
    </div>
    </>
}

export default ReviewWritingHeader;