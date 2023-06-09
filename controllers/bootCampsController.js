const BootCamp = require("../model/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const catchAsync = require("../utils/catchAsync");

//@desc     Get all Boot camps
//route     GET /api/v1/bootcamps
//access    Public
const getBootCamps = catchAsync(async (req, res, next) => {
  const bootCamps = await BootCamp.find();
  res.json({
    success: true,
    message: "All boot camp ",
    count: bootCamps.length,
    data: bootCamps,
  });
});

//@desc     Create New Boot camps
//route     POST /api/v1/bootcamps
//access    Private
const createBootCamps = catchAsync(async (req, res, next) => {
  const bootCamp = await BootCamp.create(req.body);
  console.log("body", req.body);

  if (!bootCamp) {
    return next(new ErrorResponse("Error in creating", 400));
  }
  res.json({
    success: true,
    message: "Boot camp is created",
    data: bootCamp,
  });
});

//@desc     Get Single Boot camps
//route     GET /api/v1/bootcamps/:id
//access    Private
const getBootCamp = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bootCamp = await BootCamp.findById(id);

    if (!bootCamp) {
      return next(
        new ErrorResponse(`Resource is not found  with ${id} ID`, 400)
      );
    }
    res.json({
      success: true,
      message: `Get boot camp on ${req.params.id} `,
      data: bootCamp,
    });
  } catch (err) {
    next(err);
  }
};

//@desc     update Single Boot camps
//route     PATCH /api/v1/bootcamps/:id
//access    Private
const updateBootCamp = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  try {
    const bootCamp = await BootCamp.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootCamp) {
      return next(
        new ErrorResponse(`Resource is not found with ${id} ID`, 400)
      );
    }

    res.status(200).json({
      success: true,
      data: bootCamp,
    });
  } catch (err) {
    next(err);
  }
});

//@desc     Delete Single Boot camps
//route     DELETE /api/v1/bootcamps/:id
//access    Private
const deleteBootCamp = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await BootCamp.findByIdAndDelete(id);
    if (!data) {
      return next(
        new ErrorResponse(`Resource is not found with ${id} ID to delete`, 400)
      );
    }
    res.json({
      success: true,
      message: `Delete boot camp on ${req.params.id} `,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = {
  getBootCamps,
  createBootCamps,
  getBootCamp,
  updateBootCamp,
  deleteBootCamp,
};
