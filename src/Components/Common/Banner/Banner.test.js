import React from "react";
import Banner from "./Banner";

it("renders the Banner component correctly", () => {
    const { container } = render(<Banner image={'https://www.northeastern.edu/graduate/wp-content/uploads/2016/05/homepage_science.jpg'} title={'Expolre, Expand, Connect'}/>);
    expect(container).toMatchSnapshot();
})