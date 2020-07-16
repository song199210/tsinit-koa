export function throwError(){
    return async (ctx:any,next:()=>Promise<any>)=>{
        try{
            await next();
        }catch(err){
            //@ts-ignore
            errLogger.error(err);
        }
    }
}