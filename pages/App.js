import express from "express";
import bodyParser from "body-parser";
import https from "https";

const app=express();


app.get("/",(req,res) => {
    res.sendFile(__dirname+"/index.js");
}); 

app.post("/userTemp",function(req,res) {
    var user_max_temp=req.body.usermaxtemp; // From Database
    var user_min_temp=req.body.usermintemp; // From Database

    const weather1="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=09954eceaa6db148b0bc074bb35ef942&units=metric#";
    https.get(weather1,function(response) {
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const max_temp=weatherData.main.temp_max;
            const min_temp=weatherData.main.temp_min;
        });
    });
})


app.get("/LoginUp",(req,res)=> {

})

app.get("/Register",(req,res)=> {
    
})

app.get("/teams",(req,res)=> {
    
})