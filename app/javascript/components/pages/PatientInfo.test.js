import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PatientInfo from "./PatientInfo";

window.confirm = jest.fn().mockImplementation(() => true);

const mockPatient = { first_name: "Stefani", last_name: "F" };

global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockPatient) });

Enzyme.configure({ adapter: new Adapter() });

describe("when PatientInfo renders", () => {
  it("has a button to go back to all patients", () => {
    const info = shallow(<PatientInfo id={1} />);
    const infoButton = info.find('Button[children="Back"]');
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
  it("Test click event", async () => {
    const mockCallBack = jest.fn();
    const patientInfoWrapper = shallow(
      <PatientInfo deletePatient={mockCallBack} />
    );
    const button = patientInfoWrapper.find("#delete-btn");
    button.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
