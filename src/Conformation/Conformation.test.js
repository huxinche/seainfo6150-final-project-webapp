import React from "react";
import Conformation from "./Conformation";

it("renders the Conformation component correctly", () => {

    const { container } = render(<Conformation form={{
        name: '',
        dob: '',
        phone: '',
        email: '',
        password: '',
        religion: null,
        edu: null,
        gender: null,
    }} />);
    expect(container).toMatchSnapshot();
})