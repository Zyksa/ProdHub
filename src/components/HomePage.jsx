import React, { useEffect } from "react";
import { useState } from "react";
import useGraphQLQuerie from "../hooks/useGraphQLQuerie";
import SearchBar from "./SearchBar";
import Substance from "./Substance";

const HomePage = () => {
    
    const [prod, setProd] = useState("");
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(false);
    const { data: res, loading } = useGraphQLQuerie(prod);
        
    useEffect(() => {
        if(!loading && res.substances.length < 2) {
            setData(res.substances[0]);
            setSearch(true);
        } else {
            console.log("Loading...");
        } 
        }, [prod, res]);
    

    const handleSubmit = (prod) => {
        setProd(prod);
    }

    return (<div className="h-screen flex flex-col items-center bg-background space-y-12 py-4 text-white">
        <h1 className="text-6xl font-bold"><span className="text-white">Prod</span><span className="text-black ml-1 p-1 bg-primary rounded-md">Hub</span></h1>
                <div className="flex flex-col items-center text-lg space-y-4">
                    <h2>Search about a prod</h2>
                    <h3>Like: <span className="text-secondary">LSD</span>, <span className="text-secondary">Xanax</span> or <span className="text-secondary">Tramadol</span></h3>
                </div>

                <SearchBar handleSubmit={handleSubmit} />
                

                {search && <Substance data={data} />}
            </div>)
    }
 
export default HomePage;