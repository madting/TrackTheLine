const express = require('express')
const app = express()
const port = 2000
const test = require('./routes/login')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', test)

app.get('/', (req, res) => {
res.status(200).json({success : true})})

app.listen(
    port, () => console.log(`Server listening on port ${port}`)
);