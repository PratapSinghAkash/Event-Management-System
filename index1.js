
const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../Event mangement System/routes/routes");
const routeRouter = require("../Event mangement System/routes/app");
// const bookingData = require("../routes/booking")

app.use(loginData);
app.use(routeRouter);
// app.use(bookingData);

app.listen(4000, ()=>{
    console.log("Server Started in 4000");
})