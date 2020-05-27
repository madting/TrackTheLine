
// Basic Node and Express Server
const express = require('express')
const app = express()
// Database Endpoint Export
const test = require('./routes/login')
// Loading bodyParser Module e.g. app.use(express.urlencoded({extended: true}))
const bodyParser = require('body-parser')
// Port Server is listening to
const port = 2000

// BodyParser for pasing data in Json or from req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// express Router usage
app.use('/test', test);

// basic endpoint with json response
app.get('/', (req, res) => {
res.status(200).json({success : true})})


// Listening to Server e.g. Starting Server
app.listen(
    port, () => console.log(`Server listening on port ${port}`)
);