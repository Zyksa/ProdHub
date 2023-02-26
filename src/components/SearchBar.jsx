import React, { Component } from "react";
class SearchBar extends Component {
    render() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const prod = e.target.elements.prod.value;
        this.props.handleSubmit(prod);
    }    

        return <div>
                    <form className="searchbar" onSubmit={handleSubmit}>
                        <label htmlFor="prod"></label>
                        <input type="text" id="prod" name="prod" placeholder="Search for a prod" />
                        <button type="submit">Search</button>
                    </form>
                </div>
              
              }
            }
 
export default SearchBar;