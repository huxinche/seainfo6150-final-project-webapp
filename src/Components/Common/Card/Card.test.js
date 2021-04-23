import React from "react";
import Card from "./Card";
import image from "../../../images/treefrog.jpg"
it("renders the Banner component correctly", () => {
    const { container } = render(<Card image={image} title={'test'} content={'<p>test content</p>'} link={'/test'}/>);
    expect(container).toMatchSnapshot();
})