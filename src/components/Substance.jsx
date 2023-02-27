const Substance = ({data}) => {
    console.log(data);

        return (
            <div>
                <h1 className="text-2xl">Informations about <span className="text-secondary">{ data.name}</span></h1>
            </div>

        );
}
 
export default Substance;