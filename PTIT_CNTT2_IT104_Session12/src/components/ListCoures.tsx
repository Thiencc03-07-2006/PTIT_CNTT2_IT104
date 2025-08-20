import {Component} from 'react';
import "../style/ListCoures.css"
export default class ListCoures extends Component{
    render(){
        const list=["HTML",'CSS','JavaScript',"ReactJS"]
        return (<div><p>Danh sach khoa hoc</p><ul id='listCoures'>{list.map((t,i)=><li key={i+1}>{i+1}. {t}</li>)}</ul></div>)
    }
}