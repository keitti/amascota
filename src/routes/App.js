import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "../views/home/homeContainer";
import RegisterContainer from "../views/register/registerContainer";
import CaracteriesContainer from "../views/caracteries/caracteriesContainer";
import TipsContainer from "../views/tips/tipsContainer";
import CalendarContainer from "../views/calendar/calendarContainer";
import HeaderContainer from "../components/header/headerContainer";
import Footer from "../components/footer/Footer";
import CheckAuth from "../views/register/CheckAuth";
import ManagerContainer from "../views/manager/ManagerContainer";

function App() {
  return (
    <BrowserRouter>
      <CheckAuth>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/registrar" component={RegisterContainer} />
          <Route path="/caracteristicas" component={CaracteriesContainer} />
          <Route path="/calendario" component={CalendarContainer} />
          <Route path="/tips" component={TipsContainer} />
          <Route path="/admin" component={ManagerContainer} />
        </Switch>
        <Footer />
      </CheckAuth>
    </BrowserRouter>
  );
}

export default App;
