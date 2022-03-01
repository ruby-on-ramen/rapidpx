import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedicationEdit from "./MedicationEdit";

Enzyme.configure({ adapter: new Adapter() });

const mockMedication = {
  medication_name: "foobar",
  dose: "twice",
  frequency: "sometimes",
  time: "now",
  prescribed_by: "goo",
  tx: "teapot",
  route: "i-805",
};

const editedMockMedication = {
  medication_name: "boobar",
  dose: "thrice",
  frequency: "always",
  time: "later",
  prescribed_by: "boo",
  tx: "teabag",
  route: "i-5",
};

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
    const MedicationEditForm = MedicationEditWrapper.find("Button");
    expect(MedicationEditForm.length).toEqual(2);
  });
  it("handles input change", () => {
    const medicationEditWrapper = shallow(<MedicationEdit medication={{}} />);
    const input = medicationEditWrapper.find({ name: "medication_name" });
    const expected = "Hello";
    input.simulate("change", {
      target: { value: expected, name: "medication_name" },
    });
    const actual =
      medicationEditWrapper.state().updateMedication.medication_name;
    expect(actual).toEqual(expected);
  });
});
