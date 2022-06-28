const express = require("express");
const db = require("./db")
// const router = require("./components/message/network");
const router = require("./network/routes");
require("dotenv").config({ path: ".env" });
db(process.env.DB_CONNECT)

var app = express()



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(router)

router(app)



app.use("/app", express.static("public"))

app.listen(3000);
console.log("La aplicacion esta escuchando en el puerto 3000")