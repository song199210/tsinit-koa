const net = require("net");
const http = require("http");

const server = http.createServer((req,res,err)=>{
    if(err) throw err;
    const url = req.url;
    res.setHeader("Content-Type" , "text/html;charset=utf-8");
    res.end(`<h1>发送请求成功</h1>`);
});
process.on("message",(type, sendHandle)=>{
    if(type === "server"){
      const worker = sendHandle;  
      worker.on("connection",(socket)=>{
          server.emit('connection',socket);
      });
    }
})