import React from 'react';
import './Banner.css';
import PropTypes from "prop-types";

const Banner = (props) => {
    const { image, title, subtitle, divider } = props;
    return <div className="banner">
        <div>
            <picture className="banner-img">
                <img
                    src={image}
                    className="banner-img" alt={title} />
            </picture>
        </div>
        <div className="banner-content">
            <div >
                <h1 className="text-title">{title}</h1>
                {
                    divider && <div className="divider"></div>
                }
                <p className="text-title">{subtitle}</p>
            </div>
        </div>
    </div>
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    divider: PropTypes.bool
}

export default Banner;