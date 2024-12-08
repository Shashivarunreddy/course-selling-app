const express = require('express');
const mongoose = require('mongoose');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
const app = express();


app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);

async function main(){

  await mongoose.connect("mongodb+srv://shashi:shashi@shashi.ou5z6.mongodb.net/coursera-app")
  app.listen(3000);
}

main()




