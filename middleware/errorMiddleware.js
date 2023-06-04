const errorMiddleware = (err, req, res, next) => {
  console.log("Trace : ".yellow, err.stack);
  if (err.code === 11000) {
    err.message = "Duplicate unique id";
  }
  res.status(err.statusCode || 500).json({
    success: false,
    data: err.message || "Something happen...",
    status: err.status,
  });
};

module.exports = errorMiddleware;
