import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminContainer from './admin/AdminContainer';
import UserContainer from './user/UserContainer';

class ManagerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { user } = this.props;
        if (user.rol == 1) return <AdminContainer />
        return <UserContainer />
    }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, {})(ManagerContainer);