import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PatientInfo from "./pages/PatientInfo";
import PatientNew from "./pages/PatientNew";
import PatientEdit from "./pages/PatientEdit";
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
      .then((response) => response.json())
      .then((patients) => this.setState({ patientsArray: patients }))
      .catch((errors) => console.log("Patients errors:", errors));
  };

  createPatient = (newPatient) => {
    fetch("/patients", {
      body: JSON.stringify(newPatient),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("There is something wrong with your submission.");
        }
        return response.json();
      })
      .then(() => this.readPatients())
      .catch((errors) => console.log("create errors:", errors));
  };

  updatePatient = (updatePatient, id) => {
    fetch(`/patients/${id}`, {
      body: JSON.stringify(updatePatient),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => this.readPatients())
      .catch((errors) => console.log("Patient Update Errors:", errors));
  };

  deletePatient = (id) => {
    fetch(`/patients/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => this.readPatients())
      .catch((errors) => console.log("Patients Delete Errors:", errors));
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
          <Header {...this.props} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home patientsArray={this.state.patientsArray} />}
            />
            <Route
              path="/patientinfo/:id"
              render={(props) => {
                const id = +props.match.params.id;
                const patientInfo = this.state.patientsArray.find(
                  (patient) => patient.id === id
                );
                return (
                  <PatientInfo
                    patientInfo={patientInfo}
                    id={id}
                    deletePatient={this.deletePatient}
                  />
                );
              }}
            />
            <Route
              path="/patientnew"
              render={() => <PatientNew createPatient={this.createPatient} />}
            />
            <Route
              path="/patientedit/:id"
              render={(props) => {
                const id = props.match.params.id;
                const patientInfo = this.state.patientsArray.find(
                  (patient) => patient.id === +id
                );
                return (
                  <PatientEdit
                    patientInfo={patientInfo}
                    updatePatient={this.updatePatient}
                    id={id}
                  />
                );
              }}
            />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
