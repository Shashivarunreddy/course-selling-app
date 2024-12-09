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

adminRouter.post("/course", adminMiddleware ,async function(req, res){
  const adminId = req.userId;
  const { title, description, imageUrl, price} = req.body;

  const course = await courseModel.create({
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

adminRouter.put("/course",adminMiddleware, async function(req, res){
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.updateOne({
    _id: courseId,
    creatorId: adminId
  }, {
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price
  })

  res.json({
    message  : "course updated successfully",
    courseId: course._id
  })
})


adminRouter.get("/course/bulk",adminMiddleware, async function(req, res){
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.find({
   
    creatorId: adminId
  });

  res.json({
    message  : "courses",
    courses
  })
})


module.exports = {
  adminRouter : adminRouter
}