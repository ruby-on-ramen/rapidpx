import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./Modal";

Enzyme.configure({ adapter: new Adapter() });

describe("When Modal renders", () => {
  it("has a modal component", () => {
    const modalWrapper = shallow(<Modal open={{}} />);
    const component = modalWrapper.find("Modal");
    expect(component.length).toEqual(1);
  });
  it("has a modal header component", () => {
    const modalWrapper = shallow(<Modal open={{}} />);
    const component = modalWrapper.find("ModalHeader");
    expect(component.length).toEqual(1);
  });
  it("has a modal body component", () => {
    const modalWrapper = shallow(<Modal open={{}} />);
    const component = modalWrapper.find("ModalBody");
    expect(component.length).toEqual(1);
  });
});
