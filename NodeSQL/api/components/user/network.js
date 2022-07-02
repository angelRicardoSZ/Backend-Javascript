const express = require("express");

const response = require("../../../network/response")

const router = express.Router();

router.get("/", function(req,res){
    // res.send("all works")
    response.success(req,res,"ok",200)
})

module.exports = router