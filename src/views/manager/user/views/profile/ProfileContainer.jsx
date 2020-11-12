import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfielView from './ProfileView';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { user } = this.props;
        return (
            <ProfielView
                user={user}
            />
        );
    }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

const mapDispatchToProps = (Dispatch) => {
    return {
        // setUser: (user) => Dispatch(User(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);