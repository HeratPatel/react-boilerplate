import React from "react";
import { shallow } from "enzyme";
import Home from "./home";

describe("<Home />", () => {
  it("Rendering", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
