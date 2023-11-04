import { Component } from "react";
import header from './index.module.css'

export default class Hello extends Component{
    render(){
        return <h1 className={header.hello}>Hello React</h1>
    }
}