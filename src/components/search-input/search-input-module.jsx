import { Component } from "react";
import './search-input-style.css';



class Searchbar extends Component {
    render() {
        const {searchOnChange} = this.props;

        return (
            <input className="search-box" type='search' name='Search' placeholder='Type your coffee' onChange={searchOnChange}/>
        )
    }
}

export default Searchbar;