import { Component } from 'react'

export default class FormatName extends Component {
  render() {
    const user={
        firstName:"Nguyen Van",
        lastName:"Nam"
    }
    return (
      <div>
        <p>Ho va ten: {user.firstName+" "+user.lastName}</p>
      </div>
    )
  }
}
