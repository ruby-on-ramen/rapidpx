import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedicationList from "./MedicationList";
// import MockMeds from "../MockMeds"





Enzyme.configure({ adapter: new Adapter() });

describe("When MedicationList renders", () => {
  it("displays a header", () => {
    const medicationList = shallow(<MedicationList />);
    const medicineHeader = medicationList.find("h3").text();
    expect(medicineHeader).toEqual("Medications");
  });
  it("has 1 button", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    const button = medicationListWrapper.find("button");
    expect(button.length).toEqual(1);
  });
  it("has a modal", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    const modal = medicationListWrapper.find("Modal");
    expect(modal.length).toEqual(2);
  });
  it("has an add medication button", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    const modal = medicationListWrapper.find("button").text()
    expect(modal).toContain("Add Medication");
  });
  it("has a modal that contains MedicationNew", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    const modal = medicationListWrapper.find("MedicationEdit")
    expect(modal.length).toEqual(1)
    
})


})