import React, { Component } from "react";
import { connect } from "react-redux";
import CaracteriesView from "./caracteriesView";

class CaracteriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

      pequeño: [
        "Border terrier",
        "Yorkshire terrier",
        "Chorkie",
        "Pinscher miniatura",
        "Maltipoo",
        "Pug",
        "Puggle",
        "Mal-shi",
        "Frenchton",
        "Teddy roosevelt terrier",
        "etc.."
      ],
      mediano: [
        "Kerry blue terrier",
        "Pastor bohemio",
        "Bóxer",
        "Spitz finlandés",
        "Kelpie australiano",
        "Schnocker",
        "Perro pastor croata",
        "Border collie",
        "Pinscher alemán",
        "American bully",
        "etc.."
      ],
      grande: [
        "Dóberman",
        "Pastor gallego",
        "Hovawart",
        "Eurasier",
        "Mastín danés",
        "Dogo sardo",
        "Rottweiler",
        "Cane Corso",
        "Galgo Ruso",
        "Pastor Alemán",
        "etc..."
      ],
      gato: [
        "Burmés",
        "Esfinge",
        "Savannah",
        "Montés",
        "Burmilla",
        "LaPerm",
        "Tonkinés",
        "Pixie bob",
        "American Wirehair",
        "Munchkin",
        "etc..",
      ],
      modal: false
    };
  }
  toggleModal() {
    this.setState({ modal: !this.state.modal })
  }
  render() {
    let { user } = this.props;
    return (
      <CaracteriesView
        user={user}
        pequeño={this.state.pequeño}
        mediano={this.state.mediano}
        grande={this.state.grande}
        gato={this.state.gato}
        modal={this.state.modal}
        toggleModal={() => this.toggleModal()}
      />
    );
  }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, {})(CaracteriesContainer);
