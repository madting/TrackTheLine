const express = require('express')
const app = express()
const port = 2000
const test = require('./routes/login')
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/test', test);

app.get('/', (req, res) => {
res.status(200).json({success : true})})

app.listen(
    port, () => console.log(`Server listening on port ${port}`)
);