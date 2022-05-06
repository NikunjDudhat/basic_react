import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city : "Suart"
        }
    };

    changeCity(){
        this.setState({
            city : "Baroda"
        })
    }
    

    render() {
        return (
            <div>
                <p>City : {this.state.city}</p>
                <button onClick={() => this.changeCity()}>Change</button>
            </div>
        );
    }
}

export default City;