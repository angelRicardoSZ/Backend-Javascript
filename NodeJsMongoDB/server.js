const express = require("express");
const app = express()
const server = require("http").Server(app);
const config = require("./config")
const cors = require("cors")
const socket = require("./socket")
const db = require("./db")
// const router = require("./components/message/network");
const router = require("./network/routes");
require("dotenv").config({ path: ".env" });
db(process.env.DB_CONNECT)


app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
socket.connect(server)
// app.use(router)

router(app)



app.use("/app", express.static("public"))

server.listen(config.port, function () {
    console.log("La aplicacion esta escuchando en el puerto 3000")
});
