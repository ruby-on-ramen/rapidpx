import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PatientInfo from "./PatientInfo";

const mockPatient = { first_name: "Stefani", last_name: "F" };

global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockPatient) });

Enzyme.configure({ adapter: new Adapter() });

describe("when Patientinfo  renders", () => {
  it("display patient first name ", () => {
    const home = shallow(<PatientInfo id={1} />);
    let homeHeading = home.find("h2").text();
    home.update();
    expect(homeHeading).toEqual(" ");
  });
});
