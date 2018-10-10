// Code ControlledInput Component Here

import React from "react"

export default class ControlledInput extends React.Component {

  state = {
    value: " ",
    name: ""
  }

  handleChange = (event) =>{
    this.setState({
      name:event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    //event.target.reset()
  }

  render(){
    return(
      <form>
      Name:
      <input onSubmit={this.handleSubmit} onChange = {this.handleChange} value = {this.state.name}/>
      </form>
    )
  }


}
