const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/equipe', function(req, res){
    res.sendFile(__dirname + '/equipes.json')
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.listen(3007, function(){
    console.log('on')
})