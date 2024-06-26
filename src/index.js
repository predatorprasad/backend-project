// require("dotenv").config(); 
// import dotenv from "dotenv";
// dotenv.config({
//     path: "./env"
// });
import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./db/connect.js";
import {app} from "./app.js";

connectDB()
.then(() => {
    app.on("error", (error)=>{
        console.log("Error connecting to the database: ", error)
        throw error
    })
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("mongoDB connection failed", err);
})



















/* 
import mongoose from "mongoose";
import {DB_NAME} from "./constants";

import express from "express";
const app = express();

(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error connecting to the database: ", error)
            throw error
        })


        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR")
        throw error
    }
})()

*/