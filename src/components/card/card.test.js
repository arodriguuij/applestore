import React from "react";
import { shallow } from "enzyme";
import Card from "./card.components";

describe("card-description-price", () => {
  const setup = (props) => {
    return shallow(<Card {...props} />);
  };

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("renders without error", () => {
    const wrapper = setup();
    const cardDescriptionPrice = findByTestAttr(wrapper, "card");
    expect(cardDescriptionPrice.length).toBe(1);
  });

  test("render CardHeader", () => {
    const wrapper = setup();
    const cardDescriptionPrice = findByTestAttr(wrapper, "card-header");
    expect(cardDescriptionPrice.length).toBe(1);
  });
  test("render CardImage", () => {
    const wrapper = setup();
    const cardDescriptionPrice = findByTestAttr(wrapper, "card-image");
    expect(cardDescriptionPrice.length).toBe(1);
  });
  test("render CardDescription", () => {
    const wrapper = setup();
    const cardDescriptionPrice = findByTestAttr(wrapper, "card-description");
    expect(cardDescriptionPrice.length).toBe(1);
  });

  test("No special and Accessories collection has card-dark className", () => {
    const wrapper = setup({ collection: "Accessories" });
    const cardDescriptionPrice = findByTestAttr(wrapper, "card");
    expect(cardDescriptionPrice.hasClass("card-dark")).toEqual(true);
  });

  test("No special and no Accessories collections have card-light className", () => {
    const wrapper = setup({ collection: "iPhone" });
    const cardDescriptionPrice = findByTestAttr(wrapper, "card");
    expect(cardDescriptionPrice.hasClass("card-light")).toEqual(true);
  });

  test("Special and Accessories have card-special-top-right and card-dark className", () => {
    const wrapper = setup({ special: true, collection: "Accessories" });
    const cardDescriptionPrice = findByTestAttr(wrapper, "card");
    expect(
      cardDescriptionPrice.hasClass("card-dark", "card-special-top-right")
    ).toEqual(true);
  });

  test("Special and no Accessories have card-special-top-right and card-light className", () => {
    const wrapper = setup({ special: true, collection: "Iphone" });
    const cardDescriptionPrice = findByTestAttr(wrapper, "card");
    expect(
      cardDescriptionPrice.hasClass("card-light", "card-special-top-right")
    ).toEqual(true);
  });
});
