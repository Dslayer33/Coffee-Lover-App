import { Component } from "react";

import './coffee-footer-style.css';


class CoffeeFooter extends Component {

    render(){
        return(
            <footer className="coffee-footer">
                <div className="footer-content-block">
                    <h2 className="footer-title">CoffeeLover</h2>
                    <h4 className="footer-link">
                       This site is made by <a href="https://github.com/Dslayer33"  className="footer-author">Dslayer33</a>
                    </h4>
                </div>
            </footer>
        )
    };
}

export default CoffeeFooter;