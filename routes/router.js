import express from "express";
import controller from "../controllers/controller.js";
import middleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
});

router.get("/test", middleware, controller.testGet);

router.post("/login", controller.login);
router.get("/testCheck", middleware, controller.testCheck);
export default router;
