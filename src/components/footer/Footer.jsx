import React, { Component } from 'react';
import "./styles.css";

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <footer>
                <h4>© Amascota 2020 - Grupo Amascota grado 11 </h4>
            </footer>
        )
    }
}

export default Footer;