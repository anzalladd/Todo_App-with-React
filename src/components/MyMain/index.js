import React, { Component } from 'react';
import Content from './Content';
import SideBar from './SideBar';
import './style.css';
export default class MyMain extends Component{
    render(){
        return(
            <div className="main">
            <SideBar/>
            <Content/>
            </div>
        )
    }
}