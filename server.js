//Modules
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//2.Custom modules

//2.1 Routes
import router from "./routes/bootCampsRoute.js";

// 2.2 Middleware
// import { logger } from "./middleware/logger.js";

//loading dotenv
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
// app.use(logger);
//mount Routes
app.use("/api/v1/bootcamps", router);

//Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on ${process.env.PORT}`
  )
);

//load dotenv files
