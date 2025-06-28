import express from "express";
import bodyPraser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app=express();
const port=3000;
const _dirname=dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.use(bodyPraser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/public/index.html");
});
app.post("/submit",(req,res)=>{
    var ans=0;
    var sen ="none";
    switch (req.body["operator"]) {
            case "+":
                ans=parseInt(req.body["num1"])+parseInt(req.body["num2"]);
                sen="Addition"
                break;
            case "-":
                ans=req.body["num1"]-req.body["num2"];
                sen="substraction"
                break;
            case "/":
                ans=req.body["num1"]/req.body["num2"];
                sen="Division"
                break;
            case "*":
                ans=req.body["num1"]*req.body["num2"];
                sen="Multiplication"
                break;
    }
    res.render("index.ejs",{
        n1 : req.body["num1"],
        n2 : req.body["num2"],
        p : req.body["operator"],
        answer:ans,
        op : sen,
        
    });
});
app.listen(port,()=>{
    console.log("server running in port "+port);
});