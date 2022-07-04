const express = require("express");
const secure = require("./secure")
const response = require("../../../network/response")
const controller = require("./index")

const router = express.Router();




router.use(express.json()) 

// Routes
router.get("/", list)

router.post("/follow/:id",secure("follow"), follow)

router.get('/:id/following', following);

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


function follow(req,res) {
    controller.follow(req.user.id,req.params.id)
        .then((user) => {
            response.success(req,res,user,200)
        })
        .catch((error) => {
            response.error(req,res,error.message,500)
        })

}


function following(req, res) {
	return controller.following(req.params.id)
		.then( (data) => {
			return response.success(req, res, data, 200);
		})
		.catch((error) => {
            response.error(req,res,error.message,500)
        })
}



module.exports = router