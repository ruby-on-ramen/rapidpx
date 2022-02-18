import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PatientInfo from "./PatientInfo";

Enzyme.configure({ adapter: new Adapter() });

// describe("", () => {
//   it("", () => {
//     const home = shallow(<Home />);
//     const homeHeading = home.find("h1").text();
//     expect(homeHeading).toEqual("Patients");
//   });
// });

// img file
// first_name
// last_name
// edit patient button
