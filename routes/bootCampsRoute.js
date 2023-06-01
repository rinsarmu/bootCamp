const express = require("express");
const {
  getBootCamps,
  createBootCamps,
  getBootCamp,
  updateBootCamp,
  deleteBootCamp,
} = require("../controllers/bootCampsController.js");

const router = express.Router();
router.route("/").get(getBootCamps).post(createBootCamps);

router
  .route("/:id")
  .get(getBootCamp)
  .patch(updateBootCamp)
  .delete(deleteBootCamp);

module.exports = router;
