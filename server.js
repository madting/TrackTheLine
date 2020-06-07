require("dotenv").config();

// Basic Node and Express Server
const express = require("express");
const app = express();
// Database Endpoint Export
const logintest = require("./routes/login");
const signuptest = require("./routes/signup");
// Loading bodyParser Module e.g. app.use(express.urlencoded({extended: true}))
const bodyParser = require("body-parser");
// Port Server is listening to
const port = 2000;
// Jason Web Token Module for authorization of Users
const jwt = require("jsonwebtoken");

// Cors Module for connection react native app
const cors = require("cors");

// BodyParser for pasing data in Json or from req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using cors

app.use(cors());

// express Router usage of Database
app.use("/", logintest);
// Router Database creation
app.use("/signup", signuptest);
// basic endpoint with json response
app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

// Listening to Server e.g. Starting Server
app.listen(port, () => console.log(`Server listening on port ${port}`));
