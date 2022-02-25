import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./Modal";

Enzyme.configure({ adapter: new Adapter() });

describe("When Modal renders", () => {
  it("has 1 buttons", () => {
    const modaltWrapper = shallow(<Modal open={{}} />);
    const button = modaltWrapper.find("button");
    expect(button.length).toEqual(1);
  });
  it("has 1 buttons text", () => {
    const buttonWrapper = shallow(<Modal open={{}} />);
    const button = buttonWrapper.find("button").text();
    expect(button).toEqual("Close");
  });
});
