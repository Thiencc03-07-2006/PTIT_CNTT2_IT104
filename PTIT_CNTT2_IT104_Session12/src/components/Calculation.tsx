import { Component } from "react";
function sum(a:number,b:number):string{
    return a+" + "+b+" = "+(a+b)
}
function sub(a:number,b:number):string{
    return a+" - "+b+" = "+(a-b)
}
function mul(a:number,b:number):string{
    return a+" * "+b+" = "+a*b
}
function div(a:number,b:number):string{
    return a+" / "+b+" = "+a/b
}
export default class Calculation extends Component{
    render(){
        const num=10
        return (<div><p>Danh sach ket qua</p><ul><li>{sum(num,num)}</li><li>{sub(num,num)}</li><li>{mul(num,num)}</li><li>{div(num,num)}</li></ul></div>)
    }
}