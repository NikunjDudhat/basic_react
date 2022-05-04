import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Country: "India"
        };
    }

    changeCountry(){
        this.setState({
            Country: "US"
        })
    }


    render() {
        return (
            <>
                <div>Country : {this.state.Country}</div>
                <button onClick={() => this.changeCountry()}>Change`</button>
            </>
        );
    }
}

export default Country;
