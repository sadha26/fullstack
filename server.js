//import Express
var express=require('express')

var app=express()
var port=3001;
app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
app.get('/about',(req,res)=>{
    res.send("about page")
})
app.get('/users/:name',(req,res)=>{
    var userName=req.params.name;
    res.send('Hello,${username}!');
})

app.listen(port,()=>{
    console.log('server running')
})