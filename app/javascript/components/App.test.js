import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

const mockPatients = {};

global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockPatients) });

Enzyme.configure({ adapter: new Adapter() });

describe("When App renders", () => {
  it("has a Header component", () => {
    const AppWrapper = shallow(<App medication={{}} />);
    const AppForm = AppWrapper.find("Header");
    expect(AppForm.length).toEqual(1);
  });
  it("has a Footer component", () => {
    const AppWrapper = shallow(<App medication={{}} />);
    const AppForm = AppWrapper.find("Footer");
    expect(AppForm.length).toEqual(1);
  });
});
