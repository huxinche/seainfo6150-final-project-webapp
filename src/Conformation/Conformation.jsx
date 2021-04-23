import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
const Conformation = (props) => {
    const { form } = props;
    return <div className="container mt">
        <h1>Your profile</h1>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{form.name}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{form.gender}</td>
                </tr>
                <tr>
                    <th>Datebirth</th>
                    <td>{form.dob}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{form.email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{form.phone}</td>
                </tr>

                <tr>
                    <th>Religion</th>
                    <td>{form.religion}</td>
                </tr>
                <tr>
                    <th>Education level</th>
                    <td>{form.edu}</td>
                </tr>
                <tr>
                    <th>Your Password</th>
                    <td>{form.password}</td>
                </tr>
            </tbody>

        </table>
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>
            <Link to="/" className="btn-back">Back to Home</Link>
        </div>
        <br />
        <br />

    </div>
}

Conformation.propTypes = {
    form: PropTypes.object.isRequired,
}

export default Conformation;