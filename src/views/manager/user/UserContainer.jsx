import React, { Component } from 'react';
import HeaderUser from './components/HeaderUser';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <HeaderUser />
        );
    }
}

export default UserContainer;