import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { User } from '../../../reducers/actions/users';
import HeaderUser from './components/HeaderUser';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        };
    }
    logOut() {
        localStorage.removeItem("correo");
        this.props.setUser({});
        this.setState({ isLogin: false });
    }
    render() {
        if(!this.state.isLogin) return <Redirect to="/" />
        return (
            <HeaderUser
            logOut={()=>this.logOut()}
            />
        );
    }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

const mapDispatchToProps = (Dispatch) => {
    return {
        setUser: (user) => Dispatch(User(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);