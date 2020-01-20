const express = require("express");
const bodyParser = require("body-parser");

//import the routers

const routeUser = require("./users");
const routeAdmin = require("./admin");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use("/users", routeUser);
app.use("/admin", routeAdmin);

app.listen(3000, "0.0.0.0", () => {
  console.log("Server Started on port 4000");
});
