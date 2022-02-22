import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("When Header renders", () => {
  it("displays the Header", () => {
    const header = shallow(<Header />);
    const navLinkCount = header.find("NavLink");
    expect(navLinkCount.length).toEqual(3);
  });
});
