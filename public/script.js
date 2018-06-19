

$.ajax({
    url: "http://localhost:3013/test",
    methode: 'get',
    success: function (data) {
        console.log(data)
        for (i = 0; i<data.length; i++){
            $('#j').append('<li class ="col-sm-6 offset-sm-3 list-group-item bg-secondary">'+ '<p>' + data[i].pays + '</p>' +"" + '<img class="w-25" src ="' + data[i].flag +'">' + '</li>')
        }
        
    }})