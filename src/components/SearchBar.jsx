import React from "react";
const SearchBar = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const prod = e.target.elements.prod.value;
        props.handleSubmit(prod);
    }    

        return (<div>
                    <form className="text-center text-black" onSubmit={handleSubmit}>
                        <label htmlFor="prod"></label>
                        <input type="text" id="prod" name="prod" className="rounded-lg p-1" autoComplete="off" placeholder="Search for a prod" />
                        <button className="m-2 px-2 py-1 rounded-md bg-primary text-white" type="submit">Search</button>
                    </form>
                </div>
        )
              }

 
export default SearchBar;