import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PatientEdit from "./PatientEdit";

const mockPatient = { first_name: "Stefani", last_name: "F" };

global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockPatient) });

Enzyme.configure({ adapter: new Adapter() });

describe("when PatientEdit renders", () => {
  it("has a button to go back to patient profile", () => {
    const info = shallow(<PatientEdit id={1} />);
    const infoButton = info.find('Button[children="Delete"]');
    expect(infoButton.length).toEqual(1);
  });
});
