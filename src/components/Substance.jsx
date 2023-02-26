import { Component } from "react";

class Substance extends Component {
    state = {  } 
   

    render() { 
         // recupere la prop data du composant HomePage
        const { data } = this.props;
        console.log(data);

        return (
            <div>
                <h1>Informations sur</h1>
            </div>

        );
    }
}
 
export default Substance;