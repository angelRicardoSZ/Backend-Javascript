const express = require("express");
const response = require("./network/response")
const router = express.Router();

var app = express()



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);


router.get("/message", function(req,res) {
    response.success(req,res,"Lista de mensajes")
})

router.post("/message", function(req,res) {
    if(req.query.error == "ok"){
        response.error(req,res,"Error inesperado",400, "Es solo una simulacion de los errores")
    } else {
        response.success(req,res,"Creado correctamente",201)
    }
    
})


app.use("/app", express.static("public"))

app.listen(3000);
console.log("La aplicacion esta escuchando en el puerto 3000")