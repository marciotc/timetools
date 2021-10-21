const port = 12000;
const express = require('express')
const open = require('open');
const app = express();

app.use(express.static('app'))

app.listen(port, () => {
    console.log("Listening",port)
    open(`http://localhost:${port}`)
})