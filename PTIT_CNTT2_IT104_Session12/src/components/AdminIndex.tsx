import { Component } from 'react'
import Footer from './AdminIndexItem/Footer'
import Header from './AdminIndexItem/Header'
import Main from './AdminIndexItem/Main'
import Menu from './AdminIndexItem/Menu'
export default class AdminIndex extends Component {
  render() {
    return (
      <div style={{backgroundColor:'lightgray'}}>
        <Header/>
        <div style={{display: 'flex',height:"90vh"}}>
            <Menu/>
            <div style={{width:"100%",margin:"2vw",display:'flex',flexDirection:'column'}}>
                <Main/>
                <Footer/>
            </div>
        </div>
      </div>
    )
  }
}
