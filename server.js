const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGO_URL;
// Connect to database
mongoose.connect(URL , {

    useNewUrlParser: true,

});
const connection = mongoose.connection;
// 
connection.once('open',()=>{
    console.log('Mongodb connection successfull');
});

const recipesroute = require('./routes/recipes');
// Inject Routes
app.use('/recipes',recipesroute);

// Start The Server
app.listen(PORT,()=>{
    console.log(`Server connected to port : ${PORT}`);
});