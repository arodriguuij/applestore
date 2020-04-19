import React from "react";
import { shallow } from "enzyme";
import CardImage from "./card-image.component";

describe("card-image", () => {
  const setup = (props) => {
    return shallow(<CardImage {...props} />);
  };
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };
  test("render CardImage without error", () => {
    const wrapper = setup();
    const cardImage = findByTestAttr(wrapper, "card-image");
    expect(cardImage.length).toBe(0);
  });
});
