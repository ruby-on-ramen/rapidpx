import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("When Footer renders", () => {
  it("displays nav links", () => {
    const footer = shallow(<Footer />);
    const navLinkWrapper = footer.find("NavLink");
    expect(navLinkWrapper.length).toEqual(1);
  });
});
