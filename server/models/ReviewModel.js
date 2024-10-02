const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating : {type : Number, required : true},
    reviewText : {type : String, required: true}
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;