const ErrorResponse = require("../utils/errorResponse");

const receiveMessage = (message, err) => {
  let rec = {};
  rec.name = message;
  rec.isOperational = err.isOperational;
  return rec;
};

const errorMiddleware = (err, req, res, next) => {
  let error = { ...err };
  // console.log(err.stack.yellow);
  // console.log("name:", err);

  let xyz = {};
  error.message = err.message;
  console.log("Name", err.name);

  //Mongoose bad Object ID
  if (err.name === "CastError") {
    const message = `Resource is not found  with this ${err.value} ID`;
    xyz = receiveMessage("message i retrurn", err);
    console.log("XYZ", xyz);
    error = new ErrorResponse(message, 400);
    // error = receiveMessage(message, 404);
    error.status = "error";
    error.isOperational = err.isOperational || true;
  }

  //Mongoose Duplicate Entry
  if (err.code === 11000) {
    const message = `Duplicating resource is not applicable.`;
    error = new ErrorResponse(message, 400);
    error.status = "error";
    error.isOperational = err.isOperational || false;
  }

  //Mongoose Validation Error
  console.log(err);
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
    error.status = "error";
    error.isOperational = err.isOperational || false;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    data: error?.message || "Server  Error...",
    status: error.status,
    operational: error.isOperational,
    xyz: xyz.name || "NAME",
  });
};

module.exports = errorMiddleware;
