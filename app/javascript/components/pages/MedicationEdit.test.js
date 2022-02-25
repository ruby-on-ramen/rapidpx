import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedicationEdit from "./MedicationEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When MedicationEdit renders", () => {
  it("has 7 FormGroups", () => {
    const MedicationEditWrapper = shallow(<MedicationEdit medication={{}} />);
    const MedicationEditForm = MedicationEditWrapper.find("FormGroup");
    expect(MedicationEditForm.length).toEqual(7);
  });
  it("has 7 Labels", () => {
    const MedicationEditWrapper = shallow(<MedicationEdit medication={{}} />);
    const MedicationEditForm = MedicationEditWrapper.find("Label");
    expect(MedicationEditForm.length).toEqual(7);
  });
  it("has 7 Inputs", () => {
    const MedicationEditWrapper = shallow(<MedicationEdit medication={{}} />);
    const MedicationEditForm = MedicationEditWrapper.find("Input");
    expect(MedicationEditForm.length).toEqual(7);
  });
  it("has 2 buttons", () => {
    const MedicationEditWrapper = shallow(<MedicationEdit medication={{}} />);
    const MedicationEditForm = MedicationEditWrapper.find("button");
    expect(MedicationEditForm.length).toEqual(2);
  });
});
