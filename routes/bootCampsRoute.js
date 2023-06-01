import express from "express";
import {
  getBootCamps,
  createBootCamps,
  getBootCamp,
  updateBootCamp,
  deleteBootCamp,
} from "../controllers/bootCampsController.js";

const router = express.Router();
router.route("/").get(getBootCamps).post(createBootCamps);

router
  .route("/:id")
  .get(getBootCamp)
  .patch(updateBootCamp)
  .delete(deleteBootCamp);

export default router;
