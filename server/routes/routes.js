import express from "express";

const router = express.Router();

import authControllers from "../controllers/authControllers.js";
import verifyToken from "../controllers/verifyToken.js";

router.post("/register", authControllers.register_post);
router.post("/login", authControllers.login_post);

router.get("/private", verifyToken, authControllers.private_get);

router.get("/", (req, res, next) => {
  return res.status(200).send({
    message: "working",
  });
});

export default router;
