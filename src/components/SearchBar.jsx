import React from "react";
const SearchBar = (props) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const prod = e.target.elements.prod.value;
        props.handleSubmit(prod);
    }    

        return <div>
                    <form className="searchbar" onSubmit={handleSubmit}>
                        <label htmlFor="prod"></label>
                        <input type="text" id="prod" name="prod" placeholder="Search for a prod" />
                        <button type="submit">Search</button>
                    </form>
                </div>
              
              }
 
export default SearchBar;