import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PatientInfo from "./pages/PatientInfo";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsArray: [],
    };
  }

  componentDidMount() {
    this.readPatients();
  }

  readPatients = () => {
    fetch("/patients")
      .then((resp) => resp.json())
      .then((patients) => this.setState({ patientsArray: patients }))
      .catch((errors) => console.log("Patients errors:", errors));
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <Router>
          {/* <Header {...this.props} /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home patientsArray={this.state.patientsArray} />}
            />
            <Route
              path="/patientinfo/:id"
              render={(props) => {
                let id = +props.match.params.id;
                console.log(id);
                let patientInfo = this.state.patientsArray.find(
                  (patient) => patient.id === id
                );
                return <PatientInfo patientInfo={patientInfo} id={id} />;
              }}
            />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}
