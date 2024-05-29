const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello ACCKWU! 오후 8시 51분")
})

app.listen(5000)