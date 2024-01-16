const express=require('express');
const fs=require('fs');
const url=require('url');
const LawyerRouter = require('./routes/lawyerRoute');

const app=express();
app.use(express.json());


app.use('/api/lawyers',LawyerRouter);
app.use('/api/User',UserRoute);

const port=8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})