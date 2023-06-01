const getBootCamps = (req, res, next) => {
  res.json({
    success: true,
    message: "All boot camp ",
  });
};

const createBootCamps = (req, res, next) => {
  res.json({
    success: true,
    message: "Boot camp is created",
  });
};

const getBootCamp = (req, res, next) => {
  res.json({
    success: true,
    message: `Get boot camp on ${req.params.id} `,
  });
};

const updateBootCamp = (req, res, next) => {
  res.json({
    success: true,
    message: `Update boot camp on ${req.params.id} `,
  });
};

const deleteBootCamp = (req, res, next) => {
  res.json({
    success: true,
    message: `Delete boot camp on ${req.params.id} `,
  });
};

export {
  getBootCamps,
  createBootCamps,
  getBootCamp,
  updateBootCamp,
  deleteBootCamp,
};
