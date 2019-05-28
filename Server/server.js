let express = require("express")
let app = express()
let cors = require("cors")
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/test", function(req, res, next) {
    var js = {"name": "sun"}
    res.status(200).send(js)
})

app.post("/p", function(req, res, next) {
    var js = {"name": "li"}
    console.log(req.body.name)
    res.status(200).send(js)
})

app.listen(9006)