const express = require ("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()
const myDB = process.env.DB
const router = require("./src/routes")



app.use(express.json());
app.use("/",router)

app.listen(7000, async ()=>{
    console.log("server is running on 7000");
    try {
       await mongoose.connect(myDB);
       console.log("DB connected"); 
    } catch (error) {
       console.log(error); 
    }
});
