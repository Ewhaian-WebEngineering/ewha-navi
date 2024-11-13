const ReviewModel = require("../models/ReviewModel");

module.exports.getReviews = async(req, res)=>{
    const { roadName } = req.query;
    if (!roadName) {
        return res.status(400).send({ message: "roadName is required" });
    }
    try {
        // Fetch reviews for the specific road
        const reviews = await ReviewModel.find({ roadName }).sort({createdAt: -1});
        res.status(200).send(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).send(error);
    }
};

module.exports.saveReview = async(req, res, next)=>{
    // 리뷰모델의 값들 가져옴
    const {rating, reviewText} = req.body;
    const {roadName} = req.query;
    if (!rating || !reviewText) {
        return res.status(400).send({ message: "Rating and reviewText are required" });
    }
    // 리뷰모델 생성
    try {
        const newReview = await ReviewModel.create({
            roadName,
            rating,
            reviewText
        });
        console.log("Save successfully...");
        res.status(201).send(newReview);
    } catch (err) {
        console.error("Can't save this data:", err);
        res.status(500).send(err);
    }
};

