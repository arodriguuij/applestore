import React from "react";
import { shallow } from "enzyme";
import CardDescriptionNumItems from "./card-description-num-items.component";

describe("card-description-num-items", () => {
  const setup = (props) => {
    return shallow(<CardDescriptionNumItems {...props} />);
  };

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("render without error", () => {
    const wrapper = setup();
    const cardDescriptionNumItems = findByTestAttr(
      wrapper,
      "item-description-numItems"
    );
    expect(cardDescriptionNumItems.length).toBe(1);
  });

  test("render number of items", () => {
    const wrapper = setup({ numItemsOfDevice: 10 });
    const cardDescriptionNumItems = findByTestAttr(
      wrapper,
      "item-description-numItems"
    );
    expect(cardDescriptionNumItems.text()).toContain(10);
  });
});
