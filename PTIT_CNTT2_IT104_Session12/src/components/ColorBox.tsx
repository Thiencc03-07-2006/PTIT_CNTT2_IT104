import {Component} from 'react';
export default class ListCoures extends Component{
    render(){
        const list=["red","blue","green"]
        return (<div style={{display:'flex',justifyContent:"space-around"}}>{list.map(t=><div style={{width:"200px",height:"200px",color:"white",backgroundColor:t,display:'flex',alignItems:'center',justifyContent:'center'}} key={t}>Box</div>)}</div>)
    }
}