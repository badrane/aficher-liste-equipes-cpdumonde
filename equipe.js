const express = require('express');
const fs = require('fs');
const router = express.Router();

var equips = function(){
    var result = "";
    result = fs.readFileSync(__dirname+"/equipes.json");
    var test2 = JSON.parse(result);
    return test2;
}


router.get('/test', function(req, res){
    var test1 = equips();
    res.json(test1);
})

module.exports=router;