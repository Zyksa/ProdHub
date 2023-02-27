import React, { useEffect } from "react";
import { useState } from "react";
import useGraphQLQuerie from "../hooks/useGraphQLQuerie";
import SearchBar from "./SearchBar";
import Substance from "./Substance";

const HomePage = () => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(false);
    const [error, setError] = useState(null);
    const [prod, setProd] = useState(null);
    
    const query = encodeURIComponent(`
    {
		substances(query: "${prod}") {
			name
			addictionPotential
			class {
				chemical
				psychoactive
			}
			tolerance {
				full
				half
				zero
			}
			# routes of administration
			roas {
				name
				dose {
					units
					threshold
					heavy
					common { min max }
					light { min max }
					strong { min max }
				}
				duration {
					afterglow { min max units }
					comeup { min max units }
					duration { min max units }
					offset { min max units }
					onset { min max units }
					peak { min max units }
					total { min max units }
				}
				bioavailability {
					min max
				}
			}
		}
	}`);

    useEffect(() => {
        if(!search) return;
        setLoading(true);
        fetch(`https://api.psychonautwiki.org/?query=${query}`, {
        method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
			if(res.data.substances.length === 0) {
				setError("No prods founds.");
				setLoading(false);
                setSearch(false);
                setData(null);
			} else {
				setData(res.data.substances[0]);
				setLoading(false);
                setSearch(false);
                setError(null);
			}
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
            setSearch(false);
            setData(null);
        });
    }, [prod]);
    

    const handleSubmit = (prod) => {
        setProd(prod);
        setSearch(true);
    }

    return (<div className="h-screen flex flex-col items-center bg-background space-y-12 py-4 text-white">
        <h1 className="text-6xl font-bold"><span className="text-white">Prod</span><span className="text-black ml-1 p-1 bg-primary rounded-md">Hub</span></h1>
                <div className="flex flex-col items-center text-lg space-y-4">
                    <h2>Search about a prod</h2>
                    <h3>Like: <span className="text-secondary">LSD</span>, <span className="text-secondary">Xanax</span> or <span className="text-secondary">Tramadol</span></h3>
                </div>

                <SearchBar handleSubmit={handleSubmit} />
                
                {error && <><h1 className="text-red text-2xl">{error}</h1></>}
                {data && <Substance data={data} />}
            </div>)
    }
 
export default HomePage;