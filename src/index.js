import express from "express";
import dotenv from "dotenv";
import app from "./app.js"



const PORT=process.env.PORT ||8000;

app.listen(PORT,()=>{
    console.log(`APP is listening at port ${PORT}`);
});

