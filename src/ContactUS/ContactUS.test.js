import React from "react";
import ContactUS from "./ContactUS";

it("renders the ContactUS component correctly", () => {
    
    const { container } = render(<ContactUS />);
    expect(container).toMatchSnapshot();
})