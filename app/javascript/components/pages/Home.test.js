import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("When Home renders", () => {
  const patientsArray = [];
  it("displays a header", () => {
    const home = shallow(<Home patientsArray={patientsArray} />);
    const homeHeading = home.find("h1").text();
    expect(homeHeading).toEqual("Patients");
  });
});

