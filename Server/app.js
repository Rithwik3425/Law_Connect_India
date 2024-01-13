const express=require('express');
const fs=require('fs');

let lawdata=fs.readFileSync('./data/Criminallaw/prop.json','utf8');
const lawobj1=JSON.parse(lawdata);

const app=express();
app.use(express.json());

app.get('/lawdata/crim/prop',(req,res)=>{
    let parsedLawData = JSON.parse(lawdata.replace(/[\r\n]+/g, ''));
   res.status(200).json({
    status:'success',
    alllaw:lawobj1.length,
    data:{
        lawdata:parsedLawData,
    }
   })
})
const port =8000;
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})