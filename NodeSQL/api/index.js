const express = require("express")
const swaggerUi = require('swagger-ui-express');
const config = require("../config.js")
const user = require("./components/user/network")
const app = express();

const swaggerDoc = require('./swagger.json');


// Routes
app.use("/api/user", user)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, ()=> {
    console.log("Api escuchando en el puerto ",config.api.port )
})