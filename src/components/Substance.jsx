const Substance = ({data}) => {
    console.log(data);

        return (
            <div className="result">
                <h1>Informations about <span className="text-secondary">{ data.name}</span></h1>
            </div>

        );
}
 
export default Substance;