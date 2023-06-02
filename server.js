//Modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
dotenv.config({ path: "./config/config.env" });
console.log("PORT IN SERVER JS :", process.env.PORT); // 0utput 5000

//2.Custom modules

//2.1 Routes
const router = require("./routes/bootCampsRoute.js");
const notFound = require("./middleware/notFound.js");

// 2.2 Middleware
// import { logger } from "./middleware/logger.js";

//2.3 DATABASE
const connectDb = require("./config/db.js");

//loading dotenv
connectDb();
const app = express();

//parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
// app.use(logger);
//mount Routes
app.use("/api/v1/bootcamps", router);

//Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Error Handling
// app.use("/*", notFound);
// app.use()

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${PORT} ${process.env.NODE_ENV} on ${process.env.PORT}`
      .yellow.bold.underline
  )
);

//unhandled error
process.on("unhandledRejection", (err, promise) => {
  console.log("UNhandled rejection is happened.");
  server.close(() => process.exit(1));
});

//load dotenv files
