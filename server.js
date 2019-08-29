const express=require('express');
const app=express();
const port=Number(process.env.PORT || 3001);


app.listen(port,function(){
	console.log("Server started at port "+port)
})
