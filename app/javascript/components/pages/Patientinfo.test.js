import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PatientInfo from "./PatientInfo";

const mockPatient = { first_name: "Stefani", last_name: "F" };

global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockPatient) });

Enzyme.configure({ adapter: new Adapter() });

describe("when PatientInfo renders", () => {
  it("has a button to delete the patient info", () => {
    const info = shallow(<PatientInfo id={1} />);
    const infoButton = info.find('button[children="Delete Patient"]');
    expect(infoButton.length).toEqual(1);
  });
  it("has a button to edit the patient info", () => {
    const info = shallow(<PatientInfo id={1} />);
    const infoButton = info.find('button[children="Edit Patient"]');
    expect(infoButton.length).toEqual(1);
  });
  it("has a button to go back to all patients", () => {
    const info = shallow(<PatientInfo id={1} />);
    const infoButton = info.find('button[children="Back"]');
    expect(infoButton.length).toEqual(1);
  });
});
