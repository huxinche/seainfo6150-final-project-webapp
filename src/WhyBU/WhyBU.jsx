import React, { useEffect } from 'react';
import Banner from '../Components/Common/Banner/Banner';
import WhyBUbackgroud from '../images/WhyBUbackgroud.jpeg';
import './WhyBU.css';
const WhyBU = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    return <> <Banner image={WhyBUbackgroud}
        title={"Why BU?"}
    />
        <div className="container">

            <p>It’s a great experience. Whether you’re interested in a master’s degree, a doctoral program, or a certificate at Boston University, you’ll join faculty and students who share your passion. Our graduate community is vibrant, with more than 15,000 students, in nearly 400 programs, hailing from more than 130 countries. At Boston University you’re at the forefront of innovation, part of a steadfast commitment to finding interdisciplinary solutions to our world’s most urgent questions.</p>


            <h2>Enter your future prepared.</h2>
            <p>Well prepared. BU’s rigorous academic programs consistently rank among the nation’s best. And, this year, we were named among the most innovative national universities by U.S. News & World Report. You’ll study with award-winning faculty, who balance research, professional practice, scholarship, and a deep commitment to students. BU is also one of the world’s foremost research universities with extensive, world-class facilities. It’s a great opportunity to enhance your expertise, hone your analytical abilities, and make you more valuable in the career marketplace.</p>

            <h2>Our response to COVID-19.</h2>
            <p>The health and safety of the Boston University community is our top priority. When the COVID-19 pandemic struck, we drew on our deep research expertise and state-of-the-art facilities to establish an in-house testing, tracing, and screening program. By running our own collection sites and laboratories, we are able to test students, faculty and staff frequently, return results within 24 hours, and respond as necessary with minimal disruption to academic and campus life.</p>

            <p>For a broader look at how we are adapting graduate and professional education in light of COVID-19, please visit our graduate education COVID-19 site and Back2BU for the latest updates and information.</p>


            <h2>Why study in Boston?</h2>
            <p>Boston is a global leader in technology, medicine, law, higher education, engineering, finance, business, and many other industries. The metropolitan area pulses with innovation, and BU is poised to maximize collaborative and advancement opportunities with companies and institutions. And talk about work-life balance! Boston is a great place to spend your leisure time. It is a very safe city with a true mosaic of neighborhoods: charming historic streets, thriving ethnic enclaves, luxurious high-rises, pulsing nightlife centers, and laid-back suburbs. You’ll find just about every culture and every kind of cuisine represented here, including your own. Learn more about living in Boston and we think you’ll agree, there’s no other place like it.</p>


            <h2>We have the right program for you.</h2>
            <p>As we mentioned, we have almost 400 graduate programs to choose from, from fine arts to engineering to business to public health. Find yours here.</p>

        </div>

    </>
}

WhyBU.propTypes = {
}


export default WhyBU;