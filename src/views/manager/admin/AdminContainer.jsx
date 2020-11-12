import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { User } from '../../../reducers/actions/users';
import HeaderAdmin from './components/HeaderAdmin';

class AdminContainer extends Component {
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
            <HeaderAdmin
                logOut={() => this.logOut()}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);