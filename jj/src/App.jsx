import React from "react";
import './App.css'

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  increase =()=>{
    if(this.state.count < 10){
      this.setState({count:this.state.count+1})
    }else{
      alert("Count should not be greater than 10")
    }
    }

  decrease =()=>{
    if(this.state.count > 0){
      this.setState({count:this.state.count-1})
    }
  }

  reset =()=>{
    this.setState({count:this.state.count=0})
  }

  render(){
    return(
      <div>
        <div>
          <h1 className="header">Counter App</h1>
        </div>
        <div className="count">{this.state.count}</div>
        <div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.reset}>Reset</button>

        </div>
      </div>
    )
  }
}