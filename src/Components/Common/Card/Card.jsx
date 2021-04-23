import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from "prop-types";
const Card = (props) => {
    const { image, title, content, link, vertical } = props
    return <div className={+ vertical ? "card vertical" : 'card'}>
        <div className="card-img">
            <img src={image} alt={title} />
        </div>
        <div className="card-content">
            <h3>{title}</h3>
            <p>{content}</p>
            {link && <Link className="btn" to={link}>
                {/* <button  type="button"> */}
                    Learn More
                 {/* </button> */}
            </Link>}
        </div>

    </div>
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    divider: PropTypes.bool
}

export default Card;