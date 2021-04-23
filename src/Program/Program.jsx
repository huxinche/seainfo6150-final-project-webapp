import React, { useEffect } from 'react';
import Banner from '../Components/Common/Banner/Banner';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import ProgramParagraph from './ProgramParagraph';

import './Program.css';


const Program = ({ program }) => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return <> <Banner image={program['backgroud-image'].url}
        title={program.heading}
    />
        <div className="container">
            {program.paragraph1 && <ProgramParagraph paragraph={program.paragraph1} center></ProgramParagraph>}
            <hr />
            {program.paragraph2 && <ProgramParagraph paragraph={program.paragraph2}></ProgramParagraph>}
            {program.paragraph3 && <ProgramParagraph paragraph={program.paragraph3}></ProgramParagraph>}
            {program.paragraph4 && <ProgramParagraph paragraph={program.paragraph4}></ProgramParagraph>}
            <div style={{textAlign:'center'}}>
                <Link to="/findmyprogram" className="btn-back">Back to Programs</Link>
            </div>
            <br/>
            <br/>
        </div>

    </>
}

Program.propTypes = {
    program: PropTypes.object.isRequired
}


export default Program;