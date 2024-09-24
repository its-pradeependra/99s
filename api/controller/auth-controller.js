import User from "../models/user-model.js"
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {

  try {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword })
    await newUser.save();

    res.status(201).json('User Created Successfully!!!')

  } catch (error) {
    next(error)
  }
}


export const googleSignup = async (req, res, next) => {

  try {

    const { name, email, photo } = req.body
    

    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, "QAZWSXEDCVFRTGBNHYUJMKILOP");
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        username: name,
        email: email,
        password: hashedPassword,
        avatar: photo,
      });
      
      
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, "QAZWSXEDCVFRTGBNHYUJMKILOP");
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }

  } catch (error) {
    next(error);
  }
}




export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('Sign Out Success!!!');
  } catch (error) {
    next(error);
  }
};