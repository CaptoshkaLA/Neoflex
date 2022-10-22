import express from "express"
import * as bodyParser from "body-parser"
import {operationRouter} from "./controllers/operation.controller"
import * as dotenv from "dotenv"

// Чтение порта из .env файла и подключение express()
dotenv.config();
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({extended: true}))

app.get('', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/stylesheet.css', function(req, res) {
  res.sendFile(__dirname + "/" + "stylesheet.css");
});

app.use(operationRouter)

app.listen(PORT, (res) => {
  console.log(`Server running at port ${PORT}`)
})