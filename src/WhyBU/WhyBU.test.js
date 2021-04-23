import React from "react";
import WhyBU from "./WhyBU";

it("renders the WhyBU component correctly", () => {
    window.scrollTo = jest.fn()
    const { container } = render(<WhyBU  />);
    expect(container).toMatchSnapshot();
});
