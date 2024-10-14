const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/key');
const port = process.env.PORT || 5000;
const routes = require("./routes/ReviewRoute");

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use(express.urlencoded({extended: false}));

mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error:', e))

/* router 사용 */
