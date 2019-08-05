import React, { Component } from 'react'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            name: "John",
            color: "red"
        }
    }
    render(){
        return <div>{this.state.name}</div>
    }
}

export default Landing