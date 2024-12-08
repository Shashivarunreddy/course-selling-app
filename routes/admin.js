const { Router} = require('express');
const { adminModel} = require("../db");

 const adminRouter = Router();

adminRouter.post("/signup", function(req, res){
  res.json({
    message  : "signup route"
  })
})


adminRouter.post("/signin", function(req, res){
  res.json({
    message  : "signin route"
  })
})

adminRouter.post("/", function(req, res){
  res.json({
    message  : "signin route"
  })
})

adminRouter.put("/", function(req, res){
  res.json({
    message  : "signin route"
  })
})


adminRouter.get("/bulk", function(req, res){
  res.json({
    message  : "signin route"
  })
})


module.exports = {
  adminRouter : adminRouter
}