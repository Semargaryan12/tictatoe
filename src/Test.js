import React from "react";


export default class Test extends React.Component{
    constructor(){
    super();
    this.state = {
    count:0
    }
    }
    render(){
    return(
    <div>
        <button onClick={()=>{
        this.setState({count : this.state.count - 1 })
        }}>-</button>
        <h2>{this.state.count}</h2>
        <button onClick={() =>{
        this.setState({count: this.state.count + 1})
        }}>+</button>
        </div>
    )
    }
}