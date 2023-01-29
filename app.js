const express=require('express');
const mongoose=require('mongoose');
const app=express();
const url= 'mongodb://localhost:27017';

mongoose.set(url,{useNewUrlParser:true});
//connection object
const con=mongoose.connection;
con.on('open',function(){
    console.log('connected');
})
const entityRouter=require('../Practise Mongo/routers/entity');
app.use('/entity',entityRouter);

app.listen(9000,function(){
    console.log("Server started");
})