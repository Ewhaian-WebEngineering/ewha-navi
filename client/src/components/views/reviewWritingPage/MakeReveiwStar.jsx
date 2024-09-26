import React, { useState } from "react";
import BigEmptyStarIcon from "../../utils/icons/BigEmptyStarIcon.svg";
import BigFullStarIcon from "../../utils/icons/BigFullStarIcon.svg";

import "./MakeReviewStar.css";
const MakeReviewStar = ({onChangeReviewNum})=>{
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const array = [0, 1, 2, 3, 4];

    const starScore = index => {
        let star = [...clicked];
        for (let i = 0; i<5; i++){
            star[i] = i <= index ? true : false;
        }
        setClicked(star);
    };

    let clickedStarNum = clicked.filter(element => true === element).length;
    
    onChangeReviewNum(clickedStarNum);

    return <>
    <div className="rating-select-box">
    {array.map((index) => (
            <img className= "star-img" key={index} 
            onClick={()=> starScore(index)} 
            src={clicked[index] ? BigFullStarIcon : BigEmptyStarIcon} />
        ))}
    </div>
    </>
}

export default MakeReviewStar;