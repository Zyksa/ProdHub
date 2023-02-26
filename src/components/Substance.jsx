import { Component } from "react";

class Substance extends Component {
    state = {  } 
   

    render() { 
         // recupere la prop data du composant HomePage
        const { data } = this.props;

        return (
            <div className="result">
                <h1>Informations sur</h1>
            </div>

        );
    }
}
 
export default Substance;