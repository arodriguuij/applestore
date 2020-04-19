import React from "react";
import { shallow } from "enzyme";
import Breadcrumb from "./breadcrumb.component";

describe("breadcrumb", () => {
  const setup = (props) => {
    return shallow(<Breadcrumb {...props} />);
  };
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("render without error", () => {
    const wrapper = setup();
    const breadcrumb = findByTestAttr(wrapper, "breadcrumb");
    expect(breadcrumb.length).toBe(1);
  });

  test("render text", () => {
    const text = "My test";
    const wrapper = setup({ breadcrumb: text });
    const breadcrumbH1 = findByTestAttr(wrapper, "breadcrumb-h1");
    expect(breadcrumbH1.text()).toContain(text);
  });
});
