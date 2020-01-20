const db = require("./db");
const express = require("express");
const utils = require("./utils");

const router = express.Router();

router.get("/", (request, response) => {
  const connection = db.connect();
  const statement = "select * from admin";
  connection.query(statement, (error, data) => {
    connection.end();
    const admin = [];
    for (let index = 0; index < data.length; index++) {
      const Admin = data[index];
      admin.push({
        name: Admin["name"],
        email: Admin["email"]
      });
    }
    response.send(utils.createResult(error, admin));
  });
});

router.post("/login", (request, response) => {
  const { email, password } = request.body;
  const connection = db.connect();
  const statement = `select * from admin where email='${email}' and password='${password}'`;
  connection.query(statement, (error, admin) => {
    connection.end();
    if (admin.length == 0) {
      response.send(utils.createResult("Invalid Email or Password"));
    } else {
      const Admin = admin[0];
      const info = {
        name: Admin["name"],
        email: Admin["email"],
        id: Admin["id"]
      };
      response.send(utils.createResult(null, info));
    }
  });
});

router.post("/register", (request, response) => {
  const { name, email, phone, password } = request.body;
  const connection = db.connect();

  const statement1 = `select * from users where email ='${email}'`;
  connection.query(statement1, (error, admin) => {
    if (admin.length == 0) {
      const statement = `insert into admin(name,email,phone,password) values ('${name}','${email}','${phone}','${password}')`;
      connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error, data));
      });
    } else {
      connection.end();
      response.send(
        utils.createResult("Email Already,Please Use Another EmailID")
      );
    }
  });
});

router.post("/resetpassword", (request, response) => {
  const { email, password } = request.body;

  const connection = db.connect();
  const statement = `update admin set password = '${password}' where email = '${email}'`;
  connection.query(statement, (error, data) => {
    connection.end();
    response.send(utils.createResult(error, data));
  });
});

router.get("/menu", (request, response) => {
  const connection = db.connect();
  const statement = `select * from Menu_list`;
  connection.query(statement, (error, data) => {
    connection.end();
    response.send(utils.createResult(error, data));
  });
});

module.exports = router;
