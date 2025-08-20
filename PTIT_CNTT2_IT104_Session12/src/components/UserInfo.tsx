import {Component} from 'react';
import "../style/ListCoures.css"
export default class UserInfo extends Component{
    render(){
        const user={name:"An",sex:"Nam",born: new Date(2024,3,6),email:"an@gmail.com",address:"Thanh Xuan, Ha Noi"}
        return (<div>Thong tin ca nhan<p></p><ul>{Object.entries(user).map(([key,value])=><li>{key}: {value instanceof Date?value.toLocaleDateString("vi-VN").replace(/\b(\d)\b/g, "0$1"):value}</li>)}</ul></div>)
    }
}