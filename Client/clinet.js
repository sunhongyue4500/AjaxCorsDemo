let express = require("express")
let app = express()

app.get("/", function(req, res, next) {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(9005)