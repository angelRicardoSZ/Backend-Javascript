const express = require("express");
const secure = require("./secure")
const response = require("../../../network/response")
const controller = require("./index")

const router = express.Router();




router.use(express.json()) 

// Routes
router.get("/", list)

router.get("/:id", detail)

router.post("/", upsert);

router.put("/", secure("update"), upsert);



function list(req,res){
    // res.send("all works")
    controller.list()
        .then((lista)=>{
            response.success(req,res,lista,200)
        })
        .catch((error)=>{
            response.error(req,res,error.message,500)
        })
    
}

function detail(req,res){
    // res.send("all works")
    controller.get(req.params.id)
    .then((user) => {
        response.success(req,res,user,201)
    })
    .catch((error) => {
        response.error(req,res,error.message,500)
    })

}

function upsert(req,res){
    // console.log(req.body)
    // res.send("all works")
    controller.upsert(req.body)
    .then((user) => {
        response.success(req,res,user,200)
    })
    .catch((error) => {
        response.error(req,res,error.message,500)
    })

}





module.exports = router