const express = require("express");
const response = require("../../../network/response")
const controller = require("./index")

const router = express.Router();




router.use(express.json()) 

// Routes
router.get("/", list)


function list(req,res,) {
    controller.list()
        .then(data=>{
            response.success(req,res,data,200)
        })
        .catch((error)=>{
            response.error(req,res,error.message,500)
        })
}


module.exports = router;