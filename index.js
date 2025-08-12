import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port=3000;
var data;
const _dirname=dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/public/index.html");
});
app.post("/submit",(req,res)=>{
    switch(req.body.operator){
        case '+':
          data=parseInt(req.body.num1)+parseInt(req.body.num2);
          break;
        case '-':
          data=parseInt(req.body.num1)-parseInt(req.body.num2);
          break;
        case '*':
          data=parseInt(req.body.num1)*parseInt(req.body.num2);
          break;
        case '/':
          data=parseInt(req.body.num1)/parseInt(req.body.num2);
          break;
    }
    res.render("index.ejs",{
        value:data,
        op:req.body.operator,
        n1:req.body.num1,
        n2:req.body.num2
    });
});
app.listen(port,()=>{
    console.log("Server running is "+port)
});