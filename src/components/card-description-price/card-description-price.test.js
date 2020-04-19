import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CardDescriptionPrice from "./card-description-price.component";

describe("card-description-price", () => {
  /**
   * Factory function to create a ShallowWrapper for the CardDescriptionPrice component
   * @function setup
   * @param {object} props - Component props specific to this setup
   * @returns {ShallowWrapper}
   */
  const setup = (props) => {
    return shallow(<CardDescriptionPrice {...props} />);
  };

  /**
   * Return ShallowWrapper containing node(s) with the given data-test value
   * @function findByTestAttr
   * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
   * @param {Number} val - Value of data-test attribute for search
   * @returns {ShallowWrapper}
   */
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("renders without error", () => {
    const wrapper = setup();
    const cardDescriptionPrice = findByTestAttr(
      wrapper,
      "card-description-price"
    );
    expect(cardDescriptionPrice.length).toBe(1);
  });

  test("render price", () => {
    const price = 5;
    const wrapper = setup({ price: price });
    const cardDescriptionPrice = findByTestAttr(
      wrapper,
      "card-description-price"
    );
    expect(cardDescriptionPrice.text()).toContain(price);
  });
});
