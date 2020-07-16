const http = require("net");
const {Console} = require("console");
const fs = require("fs");
const path = require("path");
const fork = require("child_process").fork;
const cpus = require("os").cpus().length;

const log_path = path.resolve(__dirname,"./log");
const outfile = fs.createWriteStream(`${log_path}/out.log`);
const outerrfile = fs.createWriteStream(`${log_path}/outerr.log`);
const logger = new Console({
     stdout: outfile,
     stderr: outerrfile
});
const server = http.createServer();

server.listen(3000,()=>{
    console.log(`http://localhost:3000 服务启动成功!`);
});
function createChildProcess(){
    const worker = fork("./worker.js");
    worker.send("server",server);
    return worker;
}
function createWorkers(){
    let workers = {};
    for(let i=0;i<cpus;i++){
        const worker = createChildProcess();
        workers[worker.pid] = worker;
        worker.on("exit",()=>{
            console.log(`Worker Process PID is ${worker.pid}`);
            delete workers[worker.pid];
            setTimeout(()=>{
                const n_worker = createChildProcess();
                workers[n_worker.pid] = n_worker; 
            },4000);
        });
    }
}
createWorkers();
process.on("exit",()=>{
    console.log(`Process PID:：${process.pid}`);
    for(const pid in workers){
        workers[pid].kill();
    }
})