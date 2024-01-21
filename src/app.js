import express from "express";
import dotenv from "dotenv";


const app=express();

app.post('/test',(req,res)=> {
    res.send("Hello from server");
})

export default app;
