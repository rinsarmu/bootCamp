const notFound = (req, res, next) => {
  res.status(400).json({
    success: false,
    message: `${req.originalUrl} is not found`,
  });
};

module.exports = notFound;
