import Joi from "joi";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserValidation = Joi.object({
  email: Joi.string().email(),
  password: Joi.string(),
});

const LoginValidation = Joi.object({
  email: Joi.string().email(),
  password: Joi.string(),
});

const register_post = async (req, res, next) => {
  const validation = UserValidation.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      error: validation.error.details[0].message,
    });
  }
  const { email, password } = req.body;

  const emailExists = await User.findOne({ email: email });

  if (emailExists) {
    return res.status(400).json({
      error: "Email exists",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: email,
    password: hashPassword,
  });

  await user
    .save()
    .then((user) => {
      return res.status(201).json({
        message: "User created",
        user: {
          _id: user._id,
          email: user.email,
        },
      });
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};

const login_post = async (req, res, next) => {
  const validation = LoginValidation.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      error: validation.error.details[0].message,
    });
  }
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ error: "Email doesn't exists" });
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(400).json({ error: "Wrong Password" });
  }

  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

  return res.status(200).json({
    token,
    _id: user._id,
  });
};

const private_get = (req, res, next) => {
  return res.status(200).json({ message: "private route", user: req.user });
};

export default { register_post, login_post, private_get };
