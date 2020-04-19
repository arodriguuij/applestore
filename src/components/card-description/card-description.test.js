import React from "react";
import { shallow } from "enzyme";
import CardDescription from "./card-description.component";

describe("card-description", () => {
  const setup = (props) => {
    return shallow(<CardDescription {...props} />);
  };

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("renders without error", () => {
    const wrapper = setup();
    const cardDescription = findByTestAttr(wrapper, "card-description");
    expect(cardDescription.length).toBe(1);
  });

  test("renders CardDescriptionTitle", () => {
    const wrapper = setup();
    const cardDescriptionTitle = findByTestAttr(wrapper, "card-description-title");
    expect(cardDescriptionTitle.length).toBe(1);
  });

  test("render CardDescriptionPrice", () => {
    const wrapper = setup();
    const cardDescriptionPrice = findByTestAttr(
      wrapper,
      "card-description-price"
    );
    expect(cardDescriptionPrice.length).toBe(1);
  });
  test("render CardDescriptionNumItemsContainer", () => {
    const wrapper = setup();
    const cardDescriptionNumItemsContainer = findByTestAttr(
      wrapper,
      "card-description-num-items"
    );
    expect(cardDescriptionNumItemsContainer.length).toBe(1);
  });
});
