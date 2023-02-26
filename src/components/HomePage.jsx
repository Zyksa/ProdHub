import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Substance from "./Substance";

const HomePage = () => {
    // create state data
    
    const [data, setdata] = useState([]);

    const handleSubmit = (prod) => {
        // recupere le resultat de la requete GET de l'API
        fetch(`http://tripbot.tripsit.me/api/tripsit/getDrug?name=${prod}`, {
            // add no-cors option
            mode: "no-cors",
            method: "GET",
            headers: {
                // fixe le probleme de CORS
                "Access-Control-Allow-Origin": "*",
            }

        })
        .then(response => response.json())
        .then(data => {
            setdata(data.data[0])
        })
    }
    return <div className="homepage">
                <div className="header">
                <h1><span className="prod">Prod</span><span className="hub">Hub</span></h1>
                <h2>Search about a prod</h2>
                <h3>Like: <span className="example">LSD</span>, <span className="example">Xanax</span> or <span className="example">Tramadol</span></h3>
                </div>

                <SearchBar handleSubmit={handleSubmit} />

                <Substance data={this.state.data} />

        </div>
    }
 
export default HomePage;