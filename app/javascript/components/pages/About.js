import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-section">
          <h1>About Us</h1>
          <p>We are Ruby on Ramen</p>
          <img src={require("../../../assets/images/logo.svg")} width="300px" />
        </div>

        <div className="row">
          <div className="column">
            <div className="card">
              <div className="container">
                <img
                  src={require("../../../assets/images/hannah.jpg")}
                  width="300px"
                />
                <h2>Hannah Souder</h2>
                <p className="title">Product Manager</p>
                <p>
                  I’m a full-stack developer and a proud Marine Corps veteran. I
                  have freelance experience in graphic design and video filming
                  / editing. I am grateful to LEARN Academy who provided the
                  opportunity to dive deep into a STEM field with a bright
                  outlook. When I’m not on my Mac, I can be found on the beach,
                  in the ocean, or snuggling with my dog, Henry.
                </p>
                <a
                  href="https://www.linkedin.com/in/hannahsouder"
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
                  Hello! I live in San Diego and looking for a full-time
                  position, remote preferred. I am developing my skills in Ruby
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
                <img
                  src={require("../../../assets/images/samantha_ramen.png")}
                  width="300px"
                />
                <h2>Samantha Perez</h2>
                <p className="title">Design Lead</p>
                <p>
                  Hello World! I am a full stack developer, I am passionate on
                  creating and helping others facilitate their lives. I enjoy
                  team collaboration, open minded and eager to learn and grow
                  through new opportunities.
                </p>
                <a
                  href="https://www.linkedin.com/in/samantha-perez-71b89922b/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
