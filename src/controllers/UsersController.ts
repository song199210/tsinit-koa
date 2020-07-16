import Koa from "koa";
import Router from "koa-router";
import {RequestMapping,Resource} from "../utils/annotation";
import UsersService from "../services/UsersService";

import ResBody from "../entities/ResBody";

/**
 * @author songsheng
 * @datetime 2020-07-12
 * @desc 实现用户管理控制层Controller
 * @initRouter 注册koa-router路由注解
**/
const service = new UsersService();
const resbody:ResBody = new ResBody();

class UsersController {
    
    @Resource(new ResBody)
    private resbody:ResBody;

    @RequestMapping("/testApi")
    testApi(request:any,response:any,next:any):void{
        const result:string = service.testService();
        this.resbody.flag = true;
        this.resbody.msg = "请求成功!";
        this.resbody.datas = result;
        response.body = this.resbody;
    }
}
export default UsersController;