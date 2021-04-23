import React from 'react'
import Banner from '../Components/Common/Banner/Banner';
import Card from '../Components/Common/Card/Card';
import FindMyProgram from "../images/FindYourProgram.jpeg";
import WhyBU from '../images/WhyBU.jpeg'
import ContactUS from '../images/ContactUS.jpeg'
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner image={'https://www.northeastern.edu/graduate/wp-content/uploads/2016/05/homepage_science.jpg'}
                title="Expolre, Expand, Connect"
                divider
                subtitle={"Graduate Student Resources"} />
            <div className="container">
                <div className="wapper">
                    <p>Graduate school is an adventure of intellectual discovery, discipline, and creative thought. Your journey, though it may seem epic, is not a solo mission.</p>

                    <p>Whether you are looking for a graduate program, or you are already enrolled, this is your central place to connect with information and resources at Boston University. For prospective graduate students, learn about our programs with our Program Search tool, and discover why BU is a great place to dig in.</p>

                    <p>For current graduate students, we encourage you to reach across the campuses and take advantage of the richness that our 17 schools and colleges have to offer. Tap into available resources, discover funding and professional and career development opportunities, and connect with the graduate community at BU.</p>
                </div>
                {/* <div className="container"> */}
                <Card image={FindMyProgram}
                    title="Find Your Program"
                    content="Take a look at our graduate program offerings to see what's right for you."
                    link="/findmyprogram"
                >
                </Card>
                <div className="card-group">
                    <div className="item">
                        <Card
                            image={WhyBU}
                            title="Why BU"
                            content="Find a place to live, or a place to lunch."
                            link="/whybu"
                            vertical>
                        </Card>
                    </div>
                    <div className="item">
                        <Card
                            image={ContactUS}
                            title="Contact US"
                            content="Explore our graduate and professional student resources."
                            link="/contactus"
                            vertical>
                        </Card>
                    </div>
                </div>
            </div>
        </div>)
}

export default Home
