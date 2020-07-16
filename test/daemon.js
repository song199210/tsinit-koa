const spawn = require("child_process").spawn;

const daemon = spawn("node",["index.js"],{
    cwd: 'c://',
    detached: true,
    stdio: 'ignore'
});
daemon.unref();