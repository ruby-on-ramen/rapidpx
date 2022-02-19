import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PatientNew from './PatientNew.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When PatientNew renders", () => {
  it("displays a heading", () => {
    const patientNew= shallow(<PatientNew />)
    const newheading = patientNew.find("h3")
    expect(newheading.text()).toEqual("Add a New Patient")
  })
  it("displays a form", () => {
    const patientNew = shallow(<PatientNew />)
    const formGroup = patientNew.find("FormGroup")
    expect(formGroup.length).toEqual(9)
    const label = patientNew .find("Label")
    expect(label.length).toEqual(9)
    const input = patientNew.find("Input")
    expect(input.length).toEqual(9)
  })
})