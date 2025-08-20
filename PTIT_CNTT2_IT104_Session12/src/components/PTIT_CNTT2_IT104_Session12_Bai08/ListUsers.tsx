import { Component } from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

export default class ListUsers extends Component {
  render() {
    return (
      <div style={{borderRadius:"10px",overflow:"hidden",paddingBottom:"20px",backgroundColor:"lightgray"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <Thead/>
          <Tbody/>
        </table>
      </div>
      
    )
  }
}
