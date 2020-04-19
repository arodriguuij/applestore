import React from "react";
import { shallow } from "enzyme";
import BuyButton from "./buy-button.component";

describe("buy-button", () => {
  const setup = (props) => {
    return shallow(<BuyButton {...props} />);
  };

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("render withou error", () => {
    const wrapper = setup();
    const buyButton = findByTestAttr(wrapper, "buy-button");
    expect(buyButton.length).toBe(1);
  });

  test("render text", () => {
    const text = "Buy";
    const wrapper = setup({ text: text });
    const buyButton = findByTestAttr(wrapper, "buy-button");
    expect(buyButton.text()).toContain(text);
  });
});
