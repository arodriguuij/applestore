import React from "react";
import { shallow } from "enzyme";
import CardDescriptionTitle from "./card-description-title.component";

describe("card-description-title", () => {
  const setup = (props) => {
    return shallow(<CardDescriptionTitle {...props} />);
  };

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("renders without error", () => {
    const wrapper = setup();
    const cardDescriptionPrice = findByTestAttr(
      wrapper,
      "card-description-title-container"
    );
    expect(cardDescriptionPrice.length).toBe(1);
  });

  test("render description", () => {
    const description = "description test";
    const wrapper = setup({ description: description });
    const cardDescriptionPrice = findByTestAttr(
      wrapper,
      "card-description-title"
    );
    expect(cardDescriptionPrice.text()).toContain(description);
  });
  test("render subtype", () => {
    const subtype = "subtype test";
    const wrapper = setup({ subtype: subtype });
    const cardDescriptionPrice = findByTestAttr(
      wrapper,
      "card-description-subtype"
    );
    expect(cardDescriptionPrice.text()).toContain(subtype);
  });
});
