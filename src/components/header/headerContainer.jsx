import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderView from "./headerView";

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rol: ""
        };
    }

    componentDidMount() {
        let rol = window.localStorage.getItem("rol");
        this.setState({ rol });
    }

    render() {
        let { user } = this.props;
        console.log("Header ",user)
        console.log(this.props)
        return (
            <HeaderView
                user={user}
                rol={this.state.rol}
            />
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer
};

export default connect(mapStateToProps, {})(HeaderContainer);