const { Router} = require('express');
const { adminModel} = require("../db");

 const adminRouter = Router();

adminRouter.post("/signup", function(req, res){
  const {name, email, password} = req.body;
  res.json({
    message  : "signup route"
  })
})


adminRouter.post("/signin", function(req, res){
  res.json({
    message  : "signin route"
  })
})

adminRouter.post("/course", function(req, res){
  res.json({
    message  : "signin route"
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