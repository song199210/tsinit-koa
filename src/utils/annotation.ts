import Koa from "koa";
import Router from "koa-router";

const router:Router = new Router();

/**
 * @author songsheng
 * @datetime 2020-07-12
 * @desc 实现typescript路由注解
 * @param path 路由地址
 * @param type 请求类型
*/
export const RequestMapping = function(path:string,type:string = "GET"){
    const _type = type.toLowerCase();
    return function(target:any, propertyKey: string, desc: PropertyDescriptor){
        if(typeof(target) === "object"){
            router[_type](path,(ctx:any,next:any)=>{
                const _request:any = ctx.request;
                const _response:any = ctx.response;
                target[propertyKey](_request,_response,next);
            });
        }
    }
}

/**
 * @author songsheng
 * @datetime 2020-07-12
 * @desc 实现typescript类注解
*/
export const Component = function(target:any){
    return new target();
}

/**
 * @author songsheng
 * @datetime 2020-07-12
 * @desc 实现typescript属性注解
 * @param params 实例化属性的值
*/
export const Resource = function(params:any){
    return function(target:any,attr:any){
        target[attr] = params;
    }
}
export default router;