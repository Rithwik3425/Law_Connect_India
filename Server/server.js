import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
//import userRouter from "./routes/user.route.js";
//import authRouter from "./routes/auth.route.js";
import LawyerRouter from "./routes/lawyer.route.js";


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
if (process.env.NODE_ENV === 'development') {
  app.use(morgan("dev"));
}



//app.use("/api/user", userRouter);
//app.use("/api/auth", authRouter);
app.use("/api/Lawyers", LawyerRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});