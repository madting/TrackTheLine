const express = require("express");
const router = express.Router();
const client = require('../database')


router.get('/', (req, res) => {
client
.query("Select * from patient_profiles")
.then((data) => res.json(data))
.catch ((err) => console.log(err))

})


module.exports  = router;