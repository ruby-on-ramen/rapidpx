import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedicationShow from "./MedicationShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When MedicationShow renders", () => {
  it("displays a list", () => {
    const medicationShow = shallow(<MedicationShow medication={{}} />);
    const medShow = medicationShow.find("li");
    expect(medShow.length).toEqual(6);
    const medShow2 = medicationShow.find("ul");
    expect(medShow2.length).toEqual(1);
  });
});
