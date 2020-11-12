import React, { Component } from "react";
import TipsView from "./tipsView";

class TipsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips:[
        {
          img:"perro1.png",
          title:"Tip 1",
          description:"Bacunarlos periodicamente."
        },
        {
          img:"perro2.jpg",
          title:"Tip 2",
          description:"Sacarlos a pasiar."
        },
        {
          img:"perro1.png",
          title:"Tip 1",
          description:"Bacunarlos periodicamente."
        },
        {
          img:"perro2.jpg",
          title:"Tip 2",
          description:"Sacarlos a pasiar."
        },{
          img:"perro1.png",
          title:"Tip 1",
          description:"Bacunarlos periodicamente."
        },
        {
          img:"perro2.jpg",
          title:"Tip 2",
          description:"Sacarlos a pasiar."
        }
      ]
    };
  }

  render() {
    return (
        <TipsView tips={this.state.tips}/>
    );
  }
}

export default TipsContainer;
