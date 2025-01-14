const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/key');
const PORT = process.env.PORT || 5000;
const routes = require("./routes/ReviewRoute");

const cors = require("cors");

app.use(express.json());
const corsOptions = {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000', // React 앱 주소
    methods: ['GET', 'POST'],
    credentials: true,
};
app.use(cors(corsOptions));
app.use("/api", routes);
app.use(express.urlencoded({extended: false}));

mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error:', e))
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
/* router 사용 */

