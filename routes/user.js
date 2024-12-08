
const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

const userRouter = Router();



userRouter.post("/signup", async function(req, res){

  const {email , password, firstName,  lastName} = req.body; // todo: add zod validation

  //todo : hash the password
  //todo : use try catch block
  await userModel.create({
    email,
    password,
    firstName,
    lastName,
    // add more fields as needed
  })

  res.json({
    message  : "signup sucessfully"
  })
})


userRouter.post("/signin",async function(req, res){
  const {email , password} = req.body; 

  // todo: if the password is hashed ,  we should not compar edirectly we should decript and then compare
  const user = await userModel.findOne({
    email,
    password
  });

  if(user) {
    const token = jwt.sign({
      id: user._id
    }, JWT_USER_PASSWORD);

// do cookies logic if possible
    res.json({
      token: token
    })
  } else{
    res.status(401).json({
      message: "Invalid credentials"
    })
  }
})


userRouter.get("/purchases", function(req, res){
  res.json({
    message  : "signup route"
  })
})


module.exports = {
  userRouter: userRouter
}