import React, { Component } from "react";
import CalendarView from "./calendarView";

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <CalendarView />
    );
  }
}

export default CalendarContainer;
