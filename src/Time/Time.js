import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);   //1. constructor Set inital value
        
        this.state = {
            Time : new Date()
        } 
    }

    tick = () =>{
        this.setState({
            Time : new Date()
        })
    }

    componentDidMount = () =>{  // 3. use this method for reauest data to server
         this.TimeId = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate = (prevProps, prevState) => {  // 4. Call componentDidUpdate when previous State and currnt State is not Same.
        if(prevState.Time !== this.state.Time){
            console.log("componentDidUpdate called");
        }
    }

    componentWillUnmount = () =>{     // 5. componentWillUnmount used to realse resourse from component
        clearInterval(this.TimeId);
    }

    

    render() {
        return (
            // 2.  Call Render method each time when State Value Change
            <div>
                {this.state.Time.toLocaleString()}
            </div>
        );
    }
}

export default Time;