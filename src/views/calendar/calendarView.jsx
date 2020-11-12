import React, { Component } from "react";
import ReactLightCalendar from "@lls/react-light-calendar";
import "@lls/react-light-calendar/dist/index.css";
import "./styles/styles.css";

const DAY_LABELS = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const MONTH_LABELS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiempre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const startDate = date.getTime();
    this.state = {
      startDate, // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6), // Today + 6 days
      DAY_MARKED: [
        this.day("2020-09-21"),
        this.day("2020-09-12"),
        this.day("2020-09-14"),
      ],
    };
  }

  day = (d) => new Date(d).getTime();

  onChange = (startDate, endDate) => this.setState({ startDate, endDate });

  render = () => {
    return (
      <div className="calendar-container">
        <div className="calendar-capa">
          <h2>Revisa la salud de tu mascota.</h2>
          <ReactLightCalendar
            onChange={this.onChange}
            range={false}
            displayTime={false}
            monthLabels={MONTH_LABELS}
            dayLabels={DAY_LABELS}
            markedDays={this.state.DAY_MARKED}
          />
        </div>
      </div>
    );
  };
}
