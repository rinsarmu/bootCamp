import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    success: true,
    message: "All boot camp ",
  });
});

router.post("/", (req, res, next) => {
  res.json({
    success: true,
    message: "Boot camp is created",
  });
});

router.get("/:id", (req, res, next) => {
  res.json({
    success: true,
    message: `Get boot camp on ${req.params.id} `,
  });
});

router.patch("/:id", (req, res, next) => {
  res.json({
    success: true,
    message: `Update boot camp on ${req.params.id} `,
  });
});

router.delete("/:id", (req, res, next) => {
  res.json({
    success: true,
    message: `Delete boot camp on ${req.params.id} `,
  });
});

export default router;
