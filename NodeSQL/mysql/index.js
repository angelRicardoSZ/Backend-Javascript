const express = require("express")
const config = require("../config.js")
const router = express.Router();
const main = require("./network")
const app = express();



router.use(express.json()) 


app.use("/", main)

app.listen(config.mysqlService.port, () => {
    console.log('Servicio de mysql escuchando en el puerto', config.mysqlService.port);
})