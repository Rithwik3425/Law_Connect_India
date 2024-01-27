const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const morgan=require('morgan');
const userRouter =require( "./routes/user.route.js");
//const  authRouter=require( "./routes/auth.route.js");
const LawyerRouter=require('./routes/lawyer.route');

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log("Error is ", err);
  });

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development') 
{
  app.use(morgan("dev"));
}

app.use("/api/user", userRouter);
//app.use("/api/auth", authRouter);
app.use("/api/Lawyers", LawyerRouter);


app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});