import React, { Component } from "react";
import ReactLightCalendar from "@lls/react-light-calendar";
import "@lls/react-light-calendar/dist/index.css";
import "./styles/styles.css";
import { Modal } from '@material-ui/core';
import { API } from "../../api";
import ModalView from "./components/ModalView";
import moment from "moment-timezone";
import 'moment/locale/es';
moment.locale('es');

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
      days: [],
      modal: false
    };
  }

  componentDidMount() {
    API.GET('/cita')
      .then(({ data }) => {
        let DAY_MARKED = data.data.map(d => {
          let now = parseInt(moment().format("YYYYMMDD"));
          let day = parseInt(moment(d.fecha).format("YYYYMMDD"));
          console.log(now)
          console.log(day)
          if (day >= now) {
            return this.day(moment(d.fecha).format("YYYY-MM-DD"))
          }
          return null
        })
        this.setState({ DAY_MARKED, days: data.data })
      })
  }

  day = (d) => new Date(d).getTime();

  async selectCita(day) {
    let { days } = this.state;
    let cita = await days.find(d => moment(d.fecha).format("LL") == day);
    if (cita) this.setState({ cita, modal: true })
  }

  onChange = (startDate) => this.selectCita(moment(startDate).add(1, 'days').format("LL"));

  render = () => {
    let { days, modal, cita } = this.state;
    let now = parseInt(moment().format("YYYYMMDD"));
    return (
      <div className="calendar-container">
        <Modal
          open={modal}
          onClose={() => this.setState({ modal: false })}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {<ModalView cita={cita} setState={(values) => this.setState(values)} />}
        </Modal>
        <div className="calendar-capa">
          <h2>Revisa la salud de tu mascota.</h2>
          <div className="row cita-container">
            <div className="col-md-8">
              <div className="calendar">
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
            <div className="col-md-4">
              <div className="citas-list scrollBar">
                {
                  days.map((d, i) => (
                    <div key={i} className={`citas-card ${parseInt(moment(d.fecha).format("YYYYMMDD"))<now&&"disableCard"}`} onClick={() => this.setState({ cita: d, modal: true })} >
                      <span>{moment(d.fecha).format("LL")}</span>
                      <span>{d.nombre}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
