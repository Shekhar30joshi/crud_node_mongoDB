const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const { makeConnection } = require("./connection");

//middleware ---> puts form data(urlencoded) in req.body
app.use(express.urlencoded({ extended: false }));

//use routes
app.use("/api/user", userRouter);

//connection
makeConnection();

app.listen(3000, () => console.log("server started on 3000"));
