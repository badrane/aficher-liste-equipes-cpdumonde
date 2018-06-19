const express = require('express');
const app = express();
var router = express.Router();

var equi = require('./equipe.js');
app.use('/', equi)

app.use(express.static('public'));

// app.get('/test', function(req, res){
//     res.sendFile(__dirname + '/equipes.json')
// })

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.listen(3013, function(){
    console.log('on')
})