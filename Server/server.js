const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=require('./middleware/app');


dotenv.config({path:'./config.env'});
app.route('/api/law').get((req,res)=>{
    res.status(200).json({
        status:"success"
    })
})
const db=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);
mongoose.connect(db).then(()=>{
    console.log('Connected to Mongodb');
}).catch(err=>{
    console.log('Error is ',err);
})

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port${port}`);
})