const express = require("express");

const response = require("../../../network/response")
const controller = require("./index")

const router = express.Router();
router.use(express.json()) 

router.post("/login", function (req,res) {
    console.log("login - network",req.body)
    controller.login(req.body.username,req.body.password)
        .then(token=>{
            response.success(req,res,token,200)
        })
        .catch((error)=>{
            response.error(req,res,error.message,400)
        })
})


module.exports = router