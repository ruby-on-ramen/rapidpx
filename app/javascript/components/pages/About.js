import React, { Component } from "react";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2 style={{ textAlign: "center" }}>Meet Ruby On Ramen</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
              <div className="container">
                <h2>Hannah Souder</h2>
                <p className="title">Product Manager</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>email1@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
              <div className="container">
                <h2>Christopher Hickey</h2>
                <p className="title">Project Manager</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>email2@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
              <div className="container">
                <h2>Kirk Wang</h2>
                <p className="title">Tech Lead</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>email3@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> */}
              <div className="container">
                <h2>Samantha Perez</h2>
                <p className="title">Design Lead</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>email4@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
