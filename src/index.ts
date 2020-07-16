import "reflect-metadata";
import {createConnection} from "typeorm";
import {Users} from "./entity/users";
import {UserInfos} from "./entity/userinfos";
import {ArticleType} from "./entity/articletype";

createConnection().then(async connection => {
    const user = new Users();
    user.nickname="songxy";
    user.account="admin";
    user.password="1234";
    await connection.manager.save(user);
}).catch(error =>{
    console.log(error)
});
