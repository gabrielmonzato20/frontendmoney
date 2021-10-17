const server = require("express");
const app = server();

app.use(server.static(__dirname + "/dist/frontend"));

app.get('/*',function(req,res){

  res.sendFile(__dirname+"/dist/frontend/index.html");
})

app.listen(process.env.PORT || 4200,function(){
console.log("run Server")
});
