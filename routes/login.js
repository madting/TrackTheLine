const express = require("express");
// loading module express router
const router = express.Router();
// accessing database data
const client = require('../database/database')


router.get('/', (req, res) => {
client
.query("Select * from patient_profile")
.then((data) => res.json(data))
.catch ((err) => console.log(err))

})


module.exports  = router;