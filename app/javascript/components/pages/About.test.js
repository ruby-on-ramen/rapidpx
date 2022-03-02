import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "./About";

Enzyme.configure({ adapter: new Adapter() });

describe("When About renders", () => {
  it("displays a header", () => {
    const about = shallow(<About />);
    const aboutHeading = about.find("h1").text();
    expect(aboutHeading).toEqual("About Us");
  });
});
