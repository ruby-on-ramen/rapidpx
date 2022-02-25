import React from "react";
import Enzyme, { shallow, render } from "enzyme";
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
  it("calculates the age given the birthday", () => {
    const info = shallow(<PatientInfo />);
    expect(info.instance().getAge("2020-01-24")).toEqual(2);
    expect(info.instance().getAge("2020-03-24")).toEqual(1);
  });
  it("sets modalOpen to the opposite bool", () => {
    const info = shallow(<PatientInfo />);
    info.instance().handleModalOpen();
    expect(info.state().modalOpen).toEqual(true);
    info.instance().handleModalOpen();
    expect(info.state().modalOpen).toEqual(false);
  });
  it("Test click event", () => {
    const mockCallBack = jest.fn();
    const patientInfoWrapper = shallow(<PatientInfo deletePatient={mockCallBack} />);
    const button = patientInfoWrapper.find('button[children="Delete Patient"]');
    button.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});