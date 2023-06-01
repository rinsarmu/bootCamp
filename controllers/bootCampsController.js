//@desc     Get all Boot camps
//route     GET /api/v1/bootcamps
//access    Public
const getBootCamps = (req, res, next) => {
  res.json({
    success: true,
    message: "All boot camp ",
  });
};


//@desc     Create New Boot camps
//route     POST /api/v1/bootcamps
//access    Private
const createBootCamps = (req, res, next) => {
  res.json({
    success: true,
    message: "Boot camp is created",
  });
};

//@desc     Get Single Boot camps
//route     GET /api/v1/bootcamps/:id
//access    Private
const getBootCamp = (req, res, next) => {
  res.json({
    success: true,
    message: `Get boot camp on ${req.params.id} `,
  });
};

//@desc     update Single Boot camps
//route     PATCH /api/v1/bootcamps/:id
//access    Private
const updateBootCamp = (req, res, next) => {
  res.json({
    success: true,
    message: `Update boot camp on ${req.params.id} `,
  });
};

//@desc     Delete Single Boot camps
//route     DELETE /api/v1/bootcamps/:id
//access    Private
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
