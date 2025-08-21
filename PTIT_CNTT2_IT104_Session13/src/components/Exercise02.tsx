import { Component } from 'react'
interface Me{
    id:number
    name:string
    date:Date
    address:string
}
export default class Exercise02 extends Component<object,Me> {
    constructor(props:object){
        super(props)
        this.state={
            id:1,
            name:"Nguyen Van Son",
            date:new Date(2023/12/20),
            address:"Thanh Xuan, Ha Noi"
        }
    }
  render() {
    return (
      <div>
        <h3>Bai 2</h3>
        <p>Thong tin ca nhan</p><ul>{Object.entries(this.state).map(([key,value],i)=><li key={i}>{key}: {value instanceof Date?value.toLocaleDateString("vi-VN").replace(/\b(\d)\b/g, "0$1"):value}</li>)}</ul>
      </div>
    )
  }
}
