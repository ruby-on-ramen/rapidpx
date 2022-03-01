import React, { Component } from "react";

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
              <div className="container">
                <h2>Hannah Souder</h2>
                <p className="title">Product Manager</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>email1@example.com</p>
                <p>
                  <button className="button-style">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="container">
                <img
                  src={require("../../../assets/images/chris.jpg")}
                  width="300px"
                />
                <h2>Christopher Hickey</h2>
                <p className="title">Project Manager</p>
                <p>
                  I enjoy team meetings, coffee, and coding. My most recent
                  adventure has lead me to LEARN Academy where I found myself in
                  an intense coding boot camp and became a full-stack developer.
                  My background is in digital marketing and video editing.
                  Providing marketing strategies and delivering video marketing
                  projects.
                </p>
                <a
                  href="https://www.linkedin.com/in/christopher-hickey-6228b3a/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="container">
                <img
                  src={require("../../../assets/images/kirk.jpg")}
                  width="300px"
                />
                <h2>Kirk Wang</h2>
                <p className="title">Tech Lead</p>
                <p>
                  Hello! I live in San Diego and looking for a full time
                  positions, remote preferred. I am developing my skills in Ruby
                  on Rails with React and also looking to check out anything
                  new. I am quick to respond, reliable, and most importantly
                  love ramen.
                </p>
                <a
                  href="https://www.linkedin.com/in/kirkkwang/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Samantha Perez</h2>
                <p className="title">Design Lead</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>email4@example.com</p>
                <p>
                  <button className="button-style">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
