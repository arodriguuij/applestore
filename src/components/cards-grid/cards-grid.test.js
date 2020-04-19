import React from "react";
import { shallow } from "enzyme";
import CardsGrid from "./cards-grid.component";

describe("card-header", () => {
  const mock_bannerGridBody = [
    {
      id: "HDMICable",
      collection: "Accessories",
      name: "name",
      img: "imgUrl",
      description: "description",
      price: 29.95,
    },
    {
      id: "GamingController",
      collection: "Accessories",
      name: "name",
      img: "imgUrl",
      description: "description",
      price: 49.95,
      special: true,
    },
  ];
  const setup = (props) => {
    return shallow(<CardsGrid {...props} />);
  };
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };
  test("render CardsGrid without error", () => {
    const wrapper = setup({ bannerGridBody: mock_bannerGridBody });
    const cardsGrid = findByTestAttr(wrapper, "cards-grid");
    expect(cardsGrid.length).toBe(1);
  });
  test("render title", () => {
    const banner = "new banner";
    const wrapper = setup({
      bannerGridTitle: banner,
      bannerGridBody: mock_bannerGridBody,
    });
    const cardHeaderName = findByTestAttr(wrapper, "cards-grid-title");
    expect(cardHeaderName.text()).toContain(banner);
  });
  test("creates the correct number of Cards", () => {
    const wrapper = setup({ bannerGridBody: mock_bannerGridBody });
    const cards = findByTestAttr(wrapper, "card");
    expect(cards.length).toEqual(mock_bannerGridBody.length);
  });
});
