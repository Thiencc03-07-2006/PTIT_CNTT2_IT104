import { Component } from 'react'
import Header from './UserLayoutItem/Header'
import Navbar from './UserLayoutItem/Navbar'
import Menu from './UserLayoutItem/Menu'
import Cart from './UserLayoutItem/Cart'
import Article from './UserLayoutItem/Article'
export default class UserLayout extends Component {
  render() {
    return (
      <div style={{backgroundColor:"wheat"}}>
        <Header/>
        <Navbar/>
        <div style={{display:'flex',height:"85vh"}}>
          <Menu/>
          <div style={{display:'flex',width:"60%",justifyContent:'center',padding:"20px",gap:"20px",alignContent:'flex-start',flexWrap:'wrap'}}>{Array.from({length:16}).map(()=>(<Cart/>))}</div>
          <Article/>
        </div>
      </div>
    )
  }
}
