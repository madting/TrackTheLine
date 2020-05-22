const express = require('express')
const app = express()
const port = 2000


app.get('/', (req, res) => {
res.status(200).json({success : true})})

app.listen(
    port, () => console.log(`Server listening on port ${port}`)
);