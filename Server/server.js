const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=require('./app');

dotenv.config({path:'./config.env'});

const db=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);
mongoose.connect(db).then(()=>{
    console.log('Connected to Mongodb');
}).catch(err=>{
    console.log('Error is ',err);
})

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port${port}`);
})