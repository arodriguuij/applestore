import React from "react";
import { shallow } from "enzyme";
import CardHeader from "./card-header.component";

describe("card-header", () => {
  const setup = (props) => {
    return shallow(<CardHeader {...props} />);
  };
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };
  test("render CardHeader without error", () => {
    const wrapper = setup();
    const cardHeader = findByTestAttr(wrapper, "card-header-container");
    expect(cardHeader.length).toBe(1);
  });
  test("render name", () => {
    const name = "iphone 10";
    const wrapper = setup({ name: name });
    const cardHeaderName = findByTestAttr(wrapper, "card-header-name");
    expect(cardHeaderName.text()).toContain(name);
  });

  test("render extra", () => {
    const extra = "new";
    const wrapper = setup({ extra: extra });
    const cardHeaderName = findByTestAttr(wrapper, "card-header-extra");
    expect(cardHeaderName.text()).toContain(extra);
  });

  test("render text button", () => {
    const wrapper = setup();
    const cardHeaderName = findByTestAttr(wrapper, "card-header-button");
    expect(cardHeaderName.length).toBe(1);
  });
});
