import React, { Component } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Substance from "./Substance";

class HomePage extends Component {
    // creer un state data
    state = {
        data: [],
        search: false
    }

    render() {

    const handleSubmit = (prod) => {
        fetch(`http://tripbot.tripsit.me/api/tripsit/getDrug?name=${prod}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        this.setState({data: data});
    })
    .catch(error => console.log(error));

      console.log(this.state.data);
        
    }
    return <div className="homepage">
                <div className="header">
                <h1><span className="prod">Prod</span><span className="hub">Hub</span></h1>
                <h2>Search about a prod</h2>
                <h3>Like: <span className="example">LSD</span>, <span className="example">Xanax</span> or <span className="example">Tramadol</span></h3>
                </div>

                <SearchBar handleSubmit={handleSubmit} />


                {this.state.search && <Substance data={this.state.data} />}
            </div>
    }
}
 
export default HomePage;