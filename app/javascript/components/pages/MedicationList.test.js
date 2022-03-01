import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedicationList from "./MedicationList";

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

describe("When MedicationList renders", () => {
  it("displays a header", () => {
    const medicationList = shallow(<MedicationList />);
    const medicineHeader = medicationList.find("h3").text();
    expect(medicineHeader).toEqual("Medications");
  });
  it("has 1 button", () => {
    const medicationListWrapper = shallow(
      <MedicationList medications={[mockMedication]} />
    );
    const button = medicationListWrapper.find("#med-div-0");
    medicationListWrapper.debug();
    expect(button.length).toEqual(1);
  });
  it("has a modal", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    const modal = medicationListWrapper.find("Modal");
    expect(modal.length).toEqual(2);
  });
  it("has an add medication button", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    const modal = medicationListWrapper.find(
      'Button[children="Add Medication"]'
    );
    expect(modal.length).toEqual(1);
  });
  it("has a modal that contains MedicationNew", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    const modal = medicationListWrapper.find("MedicationEdit");
    expect(modal.length).toEqual(1);
  });
  it("sets the state of isEditOpen to the opposite", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    medicationListWrapper.instance().handleEditOpen();
    expect(medicationListWrapper.state().isEditOpen).toEqual(true);
    medicationListWrapper.instance().handleEditOpen();
    expect(medicationListWrapper.state().isEditOpen).toEqual(false);
  });
  it("sets the state of isAddOpen to the opposite", () => {
    const medicationListWrapper = shallow(<MedicationList medication={[]} />);
    medicationListWrapper.instance().handleAddOpen();
    expect(medicationListWrapper.state().isAddOpen).toEqual(true);
    medicationListWrapper.instance().handleAddOpen();
    expect(medicationListWrapper.state().isAddOpen).toEqual(false);
  });
  it("Test click event on input", () => {
    const mockCallBack = jest.fn();
    const medicationListWrapper = shallow(
      <MedicationList
        deletePatient={mockCallBack}
        medications={[mockMedication]}
      />
    );
    const input = medicationListWrapper.find("input");
    input.at(0).simulate("click");
    expect(medicationListWrapper.state().isEditOpen).toEqual(true);
  });
});
