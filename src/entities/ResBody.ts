class ResBody {
    private _flag:boolean;
    private _msg:string;
    private _datas:any;

    constructor(flag:boolean = true,msg:string = "",datas:any = null){
        this._flag = flag;
        this._msg = msg;
        this._datas = datas;
    }

    get flag():boolean {
        return this._flag;
    }

    get msg():string {
        return this._msg;
    }

    get datas():any {
        return this._datas;
    }

    set flag(value:boolean) {
        this._flag = value;
    }

    set msg(value:string) {
        this._msg = value;
    }

    set datas(value:any) {
        this._datas = value;
    }

    toJson():Object {
        const json:Object = {
            "flag": this._flag,
            "msg": this._msg,
            "datas": this._datas
        }
        return json;
    }
}

export default ResBody;