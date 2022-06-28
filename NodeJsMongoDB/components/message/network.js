const { text } = require("body-parser");
const express = require("express");
const response = require("../../network/response")
const controller = require("./controller");
const router = express.Router();


router.get("/", function(req,res) {
    const filterMessages = req.query.user || null;

    controller.getMessage(filterMessages)
    .then((messageList)=>{
        response.success(req,res,messageList,200)
    })
    .catch(e=> {
        response.error(req,res,"Unexpected Error", 500, e)
    })
})

router.post("/", function(req,res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=> {
            response.success(req,res,fullMessage,201)
        })
        .catch(e =>{
            console.log(e)
            response.error(req,res,"Informacion invalida",400, "error en el controlador")
        })
    // if(req.query.error == "ok"){
    //     response.error(req,res,"Error inesperado",400, "Es solo una simulacion de los errores")
    // } else {
    //     response.success(req,res,"Creado correctamente",201)
    // }
    
})

router.patch("/:id", function (req,res) {
    console.log(req.params.id)
    controller.updateMessage(req.params.id,req.body.message)
        .then((data)=> {
            response.success(req,res,data,200)
        })
        .catch(e => {
            response.error(req,res,"Error interno", 500, e)
        })
    
    
})

router.delete("/:id", function(req,res){
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.success(req,res,`Usuario ${req.params.id} eliminado`, 200);
    })
    .catch(e=>{
        response.error(req,res,"Error interno", 500,e)
    })
})

module.exports = router;