const express = require("express");
const router = express.Router();
const client = require('../database')


router.get('/', (req, res) => {
client
.query('Select * from patient_profile')
.then((data) => res.send(data))
.catch ((err) => console.log(err))

})


module.export  = router;