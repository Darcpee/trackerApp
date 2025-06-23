const express = require ("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

const myDB = process.env.DB



app.use(express.json());

app.listen(7000, async ()=>{
    console.log("server is running on 7000");
    try {
       await mongoose.connect(myDB);
       console.log("DB connected"); 
    } catch (error) {
       console.log(error); 
    }
});
