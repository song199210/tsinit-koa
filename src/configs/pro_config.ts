export default {
    HOST: "localhost",
    PORT: 3000,
    sql: {
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "",
        charset: "utf-8",
        limit: 20
    },
    log4js: {
        appenders: { 
            log: {
                type: "console"
            },
            http: { 
                type: "file", 
                pattern: 'yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                filename: "log/http/http"
            },
            error: { 
                type: "file", 
                pattern: 'yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                filename: "log/error/err"
            },
            res: { 
                type: "file", 
                pattern: 'yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                filename: "log/res/res"
            }
        },
        categories: { 
            default: { appenders: ["log"], level: "debug" },
            httpLogger: { appenders: ["http"], level: "debug" },
            resLogger: { appenders: ["res"], level: "debug" },
            errLogger: { appenders: ["log","error"], level: "error" },
        },
        pm2: true
    }
}