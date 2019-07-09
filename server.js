var express =require('express'); //pura framework save ho gya vaiable express me
var app= express(); //express function returns object
var port=process.env.PORT || 5000; //ager hm server purchese karenge to o chalega nahi to 5000

app.use('/',express.static('public'));   //public folder is deliverd in server 5000

//app.get('/', function(req,res){    //browser se hmesa get request ja sakti h isliye ye fun. use kiya
//   res.send("hello world");         //is code get nahi ayega jo ata tha jb use /get milega to hello world 
//})

app.get('/numbers', function(req, res){ //localhost:5000/numbers aye to dikha de ye.
    res.send("your lucky number 18");
})
app.listen(port, function(){    //5000 port pe chal to console print
   console.log("server running on 5000 ")// after above line callback fired
})