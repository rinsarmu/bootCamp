//Modules
import express from "express";
import dotenv from "dotenv";

//loading dotenv
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on ${process.env.PORT}`
  )
);

//load dotenv files
