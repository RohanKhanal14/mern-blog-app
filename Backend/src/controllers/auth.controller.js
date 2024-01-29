import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created",
      newUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const { password: userPassword, ...rest } = user._doc; //seperate password from user object
    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .json({
        message: "User logged in",
        rest,
      });
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  const { email, name, photoURL } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      const { password, ...rest } = user._doc; //seperate password from user object
      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        })
        .json({
          message: "User logged in",
          rest,
        });
    } else {
      const generatePassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(generatePassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePic: photoURL,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      const { password, ...rest } = newUser._doc; //seperate password from user object
      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        })
        .json({
          message: "User logged in",
          rest,
        });
    }
  } catch (error) {
    next(error);
  }
};
