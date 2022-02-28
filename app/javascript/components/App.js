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
import About from "./pages/About";

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

  readPatients = async () => {
    try {
      const response = await fetch("/patients");
      const patients = await response.json();
      this.setState({ patientsArray: patients });
    } catch (error) {
      console.error(error);
    }
  };

  createPatient = async (newPatient) => {
    try {
      const response = await fetch("/patients", {
        body: JSON.stringify(newPatient),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if (response.status !== 200 && response.status !== 304) {
        alert("There is something wrong with your patient submssion.");
        return;
      }
      this.readPatients();
    } catch (error) {
      console.error(error);
    }
  };

  updatePatient = async (updatePatient, id) => {
    try {
      const response = await fetch(`/patients/${id}`, {
        body: JSON.stringify(updatePatient),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
      });
      if (response.status !== 200 && response.status !== 304) {
        alert("Something went wrong with your patient update.");
        return;
      }
      this.readPatients();
    } catch (error) {
      console.error(error);
    }
  };

  deletePatient = async (id) => {
    try {
      const response = await fetch(`/patients/${id}`, {
        method: "DELETE",
      });
      if (response.status !== 200 && response.status !== 304) {
        alert("Something went wrong with your patient delete.");
        return;
      }
      this.readPatients();
    } catch (error) {
      console.error(error);
    }
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
      <div className="container">
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  patientsArray={this.state.patientsArray}
                  updatePatient={this.props.updatePatient}
                  createPatient={this.createPatient}
                />
              )}
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
                    updatePatient={this.updatePatient}
                  />
                );
              }}
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
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
