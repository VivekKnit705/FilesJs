const http=require('http');
const fs=require('fs');
const app=http.createServer();

app.on('request',(req,res)=>{
    if(req.method=='GET' && req.url=='/'){
        // res.end("Welcome to oour App");
        fs.readFile('input.txt',(err,data)=>{
            if(err) console.log(err);
            
            res.end(data.toString());
        })
    }
    else if(req.method=='GET' && req.url=='/stream'){
        const rStream=fs.createReadStream('input.txt');
        rStream.on('data',(char)=>{
            console.log(char);
            res.write(char);
        })
        rStream.on('end',()=>{
            res.end();
        })
    }
})
app.listen(3000 ,()=>{
    console.log("Connected to port 3000"); 
});