import React, { Component } from "react";
import { API } from "../../api";
import TipsView from "./tipsView";

class TipsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      tips: []
    };
  }

  componentDidMount() {
    API.GET('/tips').then(({ data }) => {
      this.setState({ tips: data.data });
    })
  }

  render() {
    return (
      <TipsView tips={this.state.tips} />
    );
  }
}

export default TipsContainer;
