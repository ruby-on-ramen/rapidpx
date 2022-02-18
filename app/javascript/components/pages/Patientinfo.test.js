import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PatientInfo from "./PatientInfo";
import fetch from "node-fetch"

Enzyme.configure({ adapter: new Adapter() });

describe("when Patientinfo  renders", () => {
  it("display patient first name ", () => {
    const home = shallow(<PatientInfo  />);
    const homeHeading = home.find("h2").text();
     expect(homeHeading).toEqual("Stefani");
  });
});


