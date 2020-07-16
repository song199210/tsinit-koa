/**
 * @author songsheng
 * @datetime 2020-07-12
 * @desc 实现注入Node中Global对象
*/
class InjectGlobal {
    private static _globals:any = {};
    static add(name:string,item:Object):void{
        if(global.hasOwnProperty(name)){
            throw new Error(`global['${name}']已存在!`);
        };
        //@ts-ignore
        global[name] = item;
    };
    static remove(name:string):void{
        if(!global.hasOwnProperty(name)){
            throw new Error(`global['${name}']不存在!`);
        };
        //@ts-ignore
        delete global[name];   
    }
}

export default InjectGlobal;