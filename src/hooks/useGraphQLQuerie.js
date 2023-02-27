import { useEffect, useState } from "react";

export default function useGraphQLQuerie(substance) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const query = encodeURIComponent(`
    {
		substances(query: "${substance}") {
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
        setLoading(true);
        fetch(`https://api.psychonautwiki.org/?query=${query}`, {
        method: "GET",
        })
        .then((res) => res.json())
        .then((res) => {
			if(res.data.substances.length === 0) {
				setError("No prods founds.");
				setLoading(false);
			} else {
				setData(res.data);
				setLoading(false);
			}
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, [query]);
    
    return { data, loading, error };
    }
