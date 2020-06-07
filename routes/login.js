const express = require("express");
// loading module express router
const router = express.Router();
// accessing database data
const client = require("../database/database");
// Jason Web Token Module for authorization of Users
const jwt = require("jsonwebtoken");

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  client
    .query("SELECT * FROM patient_profile WHERE email=$1 LIMIT 1;", [email])
    .then((data) => {
      if (!data.rows[0]) {
        res.sendStatus(401);
      } else if (password === data.rows[0].password) {
        const token = jwt.sign({ id: data.rows[0].id }, "secretSauce", {
          expiresIn: "2h",
        });
        res.send(token);
      } else {
        res.send(401);
      }
    })
    .catch((e) => console.log(e));
});

router.get("/all", (req, res, next) => {
  client
    .query("Select * from patient_profile")
    .then((data) => res.json(data.rows))
    .catch((err) => console.log(err));
});

module.exports = router;
