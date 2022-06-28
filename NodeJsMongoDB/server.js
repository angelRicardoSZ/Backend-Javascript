const express = require("express");

// const router = require("./components/message/network");
const router = require("./network/routes");



var app = express()



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(router)

router(app)



app.use("/app", express.static("public"))

app.listen(3000);
console.log("La aplicacion esta escuchando en el puerto 3000")