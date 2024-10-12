const ReviewModel = require("../models/ReviewModel");

modules.exports.getReviews = async(req, res)=>{
    // query로 roadName을 받아줄 예정
    // 예시 baseURL/review-write?roadName=포도길
    const roadName = req.query;
    // db 상에서 해당 roadName과 일치하는 결과들을 찾아오기
    const reviews = await ReviewModel.find(roadName);
    res.send(reviews);
};

module.exports.saveReview = async(req, res, next)=>{
    // 리뷰모델의 값들 가져옴
    const {rating, reviewText} = req.body;
    const {roadName} = req.query;
    // 리뷰모델 생성
    ReviewModel.create({
        roadName,
        rating,
        reviewText
    }).then((data)=>{
        console.log("save successfully...");
        res.status(201).send(data);
    }).catch((err)=>{
        {console.log({error: err, msg : "Can't save this data"});
        res.send(err);
        }
    })
};

// 평균 별점 계산 작성하기
//