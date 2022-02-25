import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedicationNew from "./MedicationNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When MedicationNew renders", () => {
  it("has 7 FormGroups", () => {
    const MedicationNewWrapper = shallow(<MedicationNew medication={{}} />);
    const MedicationNewForm = MedicationNewWrapper.find("FormGroup");
    expect(MedicationNewForm.length).toEqual(7);
  });
  it("has 7 Labels", () => {
    const MedicationNewWrapper = shallow(<MedicationNew medication={{}} />);
    const MedicationNewForm = MedicationNewWrapper.find("Label");
    expect(MedicationNewForm.length).toEqual(7);
  });
  it("has 7 Inputs", () => {
    const MedicationNewWrapper = shallow(<MedicationNew medication={{}} />);
    const MedicationNewForm = MedicationNewWrapper.find("Input");
    expect(MedicationNewForm.length).toEqual(7);
  });
  it("has 2 buttons", () => {
    const MedicationNewWrapper = shallow(<MedicationNew medication={{}} />);
    const MedicationNewForm = MedicationNewWrapper.find("Button");
    expect(MedicationNewForm.length).toEqual(1);
  });
});
