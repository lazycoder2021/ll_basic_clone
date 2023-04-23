import express from "express";
const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv"; 
dotenv.config(); 
import router from "./routes/questionsRouter.js";




mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0.5tmdwue.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('open', function () {
    console.log('db connected')
})

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));



app.use(express.json())
app.use(router);

const port = parseInt(process.env.PORT) || 3000;



app.listen(port, function () {
    console.log('server up and running....')
})
