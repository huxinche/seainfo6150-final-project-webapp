import React from 'react';
import Banner from '../Components/Common/Banner/Banner';
import ContactUSBackground from '../images/ContactUsBackground.jpeg';
import './ContactUS.css';
const ContactUS = () => {
    return <> <Banner image={ContactUSBackground}
        title={"Contact US"}
    />
        <div className="container">
            <div className="contact-us">
                <h1>Contact Us</h1>

                <h2>Prospective Graduate Students and Applicants</h2>
                <p>We invite you to direct all questions about graduate admission, including academic requirements, admission eligibility, admission application requirements and status updates to the appropriate school and college.</p>

                <h2>Faculty, Staff, and Current Students</h2>
                <p>Please contact or visit the Associate Provost for Graduate Affairs with questions related to University policy, diversity and inclusion initiatives, the creation or revision of academic programs, graduate student resources, assessment and learning outcomes, and graduate enrollment management.</p>

                <h3>Office Location</h3>
                <p>Boston University</p>
                <p>Associate Provost for Graduate Affairs</p>
                <p>Office of the Provost</p>
                <p className="text-underline">University Way, 6th Floor</p>
                <p className="text-underline">Boston, MA 02411</p>


                <h3>Phone</h3>
                <p><b>Administrative Office:</b> <span className="text-underline">617-353-2230</span></p>

                <h3>Email</h3>
                <p><span className="text-underline">apgrad@bu.edu</span></p>
                <br />
                <br />
            </div>
        </div>

    </>
}

ContactUS.propTypes = {
}


export default ContactUS;