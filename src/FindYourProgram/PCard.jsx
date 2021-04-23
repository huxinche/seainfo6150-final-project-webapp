import React from 'react'
import './PCard.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const PCard = (props) => {
    const { program } = props;
    return <><div className="p-card">
        <h2>{program.heading}</h2>
        <div dangerouslySetInnerHTML={{ __html: program.description }}></div>
        <div className="link">
            <Link to={'/program/' + program.key}>Learn More About {program.heading}</Link>
        </div>
        <div >
            <span><strong style={{ fontWeight: '800px' }}>{program.college}</strong> | {program.degree}</span>
        </div>
    </div></>
}

PCard.propTypes = {
    program: PropTypes.object.isRequired
}
export default PCard;