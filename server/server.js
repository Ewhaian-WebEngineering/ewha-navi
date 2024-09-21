require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const { PORT, MONGO_URI } = process.env;
const MongoStore = require("connect-mongo");
var fs = require('fs')
const path = require("path");
//Route 가져오기
// const PayForGoodsRouter = require("./routes/payForGoods");
//몽고DB 연결
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((e) => console.error(e));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());
// app.use("/api/payForGoods", PayForGoodsRouter);
app.listen(PORT, () => {
  console.log(`recruiting-site server listening on port ${PORT}`);
});