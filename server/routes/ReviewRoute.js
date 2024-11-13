const {Router} = require('express');

const {getReviews} = require("../controllers/ReviewController");
const {saveReview} = require("../controllers/ReviewController");

const route = Router();

route.get('/review-write/get', getReviews);
route.post('/review-write/save', saveReview);
// 별점 계산도 추가해야됨

module.exports = route;