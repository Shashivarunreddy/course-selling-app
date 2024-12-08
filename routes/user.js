
const { Router } = require("express");

const userRouter = Router();



userRouter.post("/signup", function(req, res){
  res.json({
    message  : "signup route"
  })
})


userRouter.post("/signin", function(req, res){
  res.json({
    message  : "signin route"
  })
})


userRouter.get("/purchases", function(req, res){
  res.json({
    message  : "signup route"
  })
})


module.exports = {
  userRouter: userRouter
}