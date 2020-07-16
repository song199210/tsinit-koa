import Koa from "koa";
import Cors from "koa-cors";
import BodyParser from "koa-bodyparser";
import Router from "./utils/annotation";
import {throwError} from "./middlewares/index";

import "./routers/index";
// import "./index";

import {HOST,PORT} from "./configs";

const app:Koa = new Koa();

app.use(Router.routes());
app.use(Cors());
app.use(BodyParser());
app.use(throwError());

app.listen(PORT,HOST,()=>{
    //@ts-ignore
    logger.info(`http://${HOST}:${PORT} 服务启动成功!`);
});