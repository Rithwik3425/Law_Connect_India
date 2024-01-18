const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const Tour = require("./../models/lawyers-model");
const fs = require("fs");

dotenv.config({ path: "./../config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL");
  })
  .catch((err) => {
    console.log("DB HAS CATCHED AN ERROR");
  });

const lawdata = JSON.parse(
  fs.readFileSync(__dirname + "/lawdata.json", "utf8")
);
const importexisting = async () => {
  try {
    await Tour.create(lawdata);
    console.log("DATA LOADEDD TO DB SUCCESSFULLY");
    process.exit();
  } catch (err) {
    console.log("Error Detected");
    process.exit();
  }
};
const deleteexisting = async () => {
  try {
    await Tour.deleteMany();
    console.log("DATA DELETED FROM DB SUCCESSFULLY");
    process.exit();
  } catch (err) {
    console.log("Error Detected");
  }
};

if (process.argv[2] === "--import") {
  importexisting();
} else if (process.argv[2] === "--delete") {
  deleteexisting();
}
