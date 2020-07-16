import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

/**
* @Author songxy
* @Time 2020-07-09
* @Class User Users用户表实体类
**/
@Entity()
export class Users {

    @PrimaryGeneratedColumn("uuid")
    id: number; //用户ID

    @Column({
        length: 100,
        nullable: false,
        type: "varchar"
    })
    userid: string; //用户名ID

    @Column({
        type: "varchar",
        nullable: false
    })
    nickname: string;   //用户昵称

    @Column({
        type: "varchar",
        nullable: false
    })
    account: string;    //用户名

    @Column({
        type: "varchar",
        nullable: false
    })
    password: string;   //密码

    @Column({
        type: "int",
        default: 0
    })
    age: number;    //年龄

    @Column({
        type: "varchar",
        nullable: false
    })
    email: string;  //邮箱地址

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    registerTime: Date;   //注册时间

}
