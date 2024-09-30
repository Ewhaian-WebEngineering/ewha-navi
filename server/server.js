const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/key');
const port = process.env.PORT || 5000;

mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error:', e))

/* router 사용 */
