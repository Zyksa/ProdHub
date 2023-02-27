const Substance = ({data}) => {
    console.log(data);

        return (
            <div>
                <h1 className="text-2xl">Informations about <span className="text-secondary">{ data.name}</span></h1>
                <br/>
                <p>Addiction potentielles : <span className="text-secondary">{ data.addictionPotential}</span> </p>
                <br/>
                <ul>
                    <li>Classe chimique : <span className="text-secondary">{ data.class.chemical}</span></li>
                    <li>Class psychoactive : <span className="text-secondary">{ data.class.psychoactive}</span></li>
                </ul>

                <br/>

                <ul>
                    <li>Tolérance : <span className="text-secondary">{ data.tolerance.full}</span></li>
                    <li>Reset de la tolérance : <span className="text-secondary">{ data.tolerance.zero}</span></li>
                </ul>
            </div>

        );
}
 
export default Substance;