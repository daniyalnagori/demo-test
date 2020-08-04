import React, { Component } from 'react'

class State extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: "daniyal"
        }
    }
    changeMe(){
        this.setState({
            message: 'bye'
        })
    }
        render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                {/* <button onClick={() => this.changeMe()}>click</button> */}
            </div>
        )
    }
}

export default State
