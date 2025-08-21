import { Component } from 'react'
interface Me{
    name:string
}
export default class Exercise01 extends Component<object,Me> {
    constructor(props:object){
        super(props)
        this.state={
            name:"Cao Chi Thien"
        }
    }
  render() {
    return (
      <div>
        <h3>Bai 1</h3>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
