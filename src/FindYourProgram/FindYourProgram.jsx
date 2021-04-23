import React, { useEffect, useState } from 'react'
import Banner from '../Components/Common/Banner/Banner'
import FindMyProgram from "../images/FindYourProgram.jpeg";
import PCard from './PCard';
import PropTypes from "prop-types";
const FindYourProgram = (props) => {
    const { items } = props;
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        let ps = Object.entries(items).map((el) => {
            return {
                key: el[0],
                ...el[1]
            }
        })
        setPrograms(ps);
    }, [items])
    return <>
        <Banner image={FindMyProgram}
            title="Find Your program"
        />

        <div className="container">
            {programs.map((program) => <PCard key={program.key} program={program} />)}
        </div>

    </>
}

FindYourProgram.propTypes = {
    items: PropTypes.object.isRequired
}

export default FindYourProgram;