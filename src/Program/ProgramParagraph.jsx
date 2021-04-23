import React from 'react';
import PropTypes from "prop-types";

const ProgramParagraph = (props) => {
    const { paragraph, center } = props
    return <div className={center ? "paragraph center" : "paragraph"}>
        <h2>{paragraph.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: paragraph.text }}></div>
        <div className="center">
            {paragraph.image && <img  src={paragraph.image.url} alt="paragraph.title" />}
        </div>
    </div>
}

ProgramParagraph.propTypes = {
    paragraph: PropTypes.object.isRequired,
    center: PropTypes.bool,
}

export default ProgramParagraph;