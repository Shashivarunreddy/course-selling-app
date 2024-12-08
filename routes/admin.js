const { Router} = require('express');
const { adminModel, courseModel} = require("../db");

 const adminRouter = Router();
 const { JWT_ADMIN_PASSWORD } = require("../config");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require('../middleware/admin');
adminRouter.post("/signup", async function(req, res){

  const {email , password, firstName,  lastName} = req.body; // todo: add zod validation

  //todo : hash the password
  //todo : use try catch block
  await adminModel.create({
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


adminRouter.post("/signin",async function(req, res){
  const {email , password} = req.body; 

  // todo: if the password is hashed ,  we should not compar edirectly we should decript and then compare
  const admin = await adminModel.findOne({
    email,
    password
  });

  if(admin) {
    const token = jwt.sign({
      id: admin._id
    }, JWT_ADMIN_PASSWORD);

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

adminRouter.post("/course", adminMiddleware ,function(req, res){
  const adminId = req.userId;
  const { title, description, imageUrl, price} = req.body;

  const course =  courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId
  })

  res.json({
    message  : "course created successfully",
    courseId: course._id
  })
})

adminRouter.put("/course", function(req, res){
  res.json({
    message  : "signin route"
  })
})


adminRouter.get("/course/bulk", function(req, res){
  res.json({
    message  : "signin route"
  })
})


module.exports = {
  adminRouter : adminRouter
}