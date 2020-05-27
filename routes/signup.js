const express = require("express");
const router = express.Router();
const client = require("../database/database");

const createPatient = (req, res) => {
  const {
    insurance_company,
    insurance_number,
    email,
    password,
    first_name,
    last_name,
    dob,
    mobile_number,
  } = req.body;
  client
    .query(
      "INSERT INTO patient_profile (insurance_company, insurance_number, email , password, first_name, dob, last_name, mobile_number) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        insurance_company,
        insurance_number,
        email,
        password,
        first_name,
        last_name,
        dob,
        mobile_number,
      ]
    )
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(404).json(e));
};

const createDcoctor = (req, res) => {
  const { email, password, website, contact_number } = req.body;
  client
    .query(
      "INSERT INTO doctor_profile ( email , password,  website, contact_number) VALUES($1, $2, $3, $4, );",
      [email, password, website, contact_number]
    )
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(404).json(e));
};

router.post("/create/patient", createPatient);
router.post("/create/doctor", createDcoctor);

module.exports = router;
