
const { Router } = require("express");

const courseRouter = Router();
courseRouter.post("/purchase", function(req, res){
  res.json({
    message  : "signup route"
  })
})


courseRouter.get("/preview", function(req, res){
  res.json({
    message  : "signup route"
  })
})

module.exports = {
  courseRouter: courseRouter
}

