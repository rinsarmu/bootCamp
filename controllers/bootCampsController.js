const asynHandler = require("express-async-handler");
const BootCamp = require("../model/Bootcamp");
//@desc     Get all Boot camps
//route     GET /api/v1/bootcamps
//access    Public
const getBootCamps = asynHandler(async (req, res, next) => {
  const bootCamps = await BootCamp.find();
  res.json({
    success: true,
    message: "All boot camp ",
    data: bootCamps,
  });
});

//@desc     Create New Boot camps
//route     POST /api/v1/bootcamps
//access    Private
const createBootCamps = async (req, res, next) => {
  try {
    const bootCamp = await BootCamp.create(req.body);
    console.log("body", req.body);
    res.json({
      success: true,
      message: "Boot camp is created",
      data: bootCamp,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      error: err?.data?.message || err.error,
    });
  }
};

//@desc     Get Single Boot camps
//route     GET /api/v1/bootcamps/:id
//access    Private
const getBootCamp = asynHandler(async (req, res, next) => {
  const { id } = req.params;
  const bootCamp = await BootCamp.findById(id);
  res.json({
    success: true,
    message: `Get boot camp on ${req.params.id} `,
    data: bootCamp,
  });
});

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

module.exports = {
  getBootCamps,
  createBootCamps,
  getBootCamp,
  updateBootCamp,
  deleteBootCamp,
};
