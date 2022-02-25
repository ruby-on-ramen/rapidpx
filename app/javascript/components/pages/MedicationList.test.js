import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedicationList from "./MedicationList";

Enzyme.configure({ adapter: new Adapter() });

describe("When MedicationList renders", () => {
  it("displays a header", () => {
    const medicationList = shallow(<MedicationList />);
    const medicineHeader = medicationList.find("h3").text();
    expect(medicineHeader).toEqual("Medications");
  });
  it("has 1 button", () => {
    const medicationListWrapper = shallow(<MedicationList medications={[]} />);
    const button = medicationListWrapper.find("button");
    expect(button.length).toEqual(1);
  });
});
