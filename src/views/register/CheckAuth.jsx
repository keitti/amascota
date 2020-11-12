import React, { Component } from "react";
import { connect } from "react-redux";
import { Token, delStorage } from "../../reducers/actions/services";
import { User } from "../../reducers/actions/users";
import { Redirect } from "react-router";
import { API } from "../../api";

class CheckAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.checkToken();
  }

  async checkToken() {
    let correo = await localStorage.getItem('correo');
    if (correo) {
      try {
        await API.POST("/usuario/reAuth", { correo }).then(({ data }) => {
          if (!data.ok) {
            localStorage.removeItem('correo');
          } else {
            this.props.setUser(data.data);
            this.setState({ loading: false });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    this.setState({ loading: false });
  }

  render() {
    // console.log(this.props.user)
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    // window.location.pathname = "/";

    return this.props.children;
  }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

const mapDispatchToProps = (Dispatch) => {
  return {
    setUser: (user) => Dispatch(User(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAuth);
