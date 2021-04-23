import React from "react";
import logo from "../../../images/UniversityLogo.png"
import NavBar from "./Navbar";
it("renders the NavBar component correctly", () => {
    const { container } = render(<NavBar logo={logo}/>);
    expect(container).toMatchSnapshot();
})