import React from "react";
import Program from "./Program";

it("renders the Program component correctly", () => {
    window.scrollTo = jest.fn()
    let data = {

        "heading": "MS in Applied Data Analytics",
        "head-college": "B University Metropolitan College",
        "backgroud-image": {
            "url": "https://pim.northeastern.edu/sites/default/files/2020-06/Behrakis%20copy%202%20%281%29_0.jpg"
        },
        "description": "<p>The Master of Science in Applied Data Analytics is ideal for mid-career IT professionals or students with a computer science background who seek to train their focus on analytics. Students gain solid knowledge of data analytics and examine the presentation and applications of the latest industry tools and approaches within an academically rigorous framework.</p>",
        "college": "Metropolitan College",
        "degree": "Master's",
        "paragraph1": {
            "title": "Prepare for Critical Data Analytics Roles",
            "text": "<p>Available online and on campus, the Master of Science in Applied Data Analytics (MSADA) at Boston University’s Metropolitan College (MET) is a hands-on program that exposes you to various database systems, data mining tools, data visualization tools and packages, Python packages, R packages, and cloud services such as Amazon AWS, Google Cloud, and Mass Open Cloud. The knowledge of analytics tools combined with an understanding of data mining and machine learning approaches will enhance your ability to critically analyze real-world problems and understand the possibilities and limitations of analytics applications.</p>"
        },
        "paragraph2": {
            "title": "Advance Your Career with a Master’s in Applied Data Analytics",
            "text": "<p>With data analytics needs influencing every major industry—including healthcare, tech, finance, communication, entertainment, energy, transportation, government, and manufacturing, to name some—there is significant growth in specialized data science, data engineering, automation, AI, and machine learning areas. Yet the demand for skilled talent continues to outpace supply. QuantHub research confirms a shortfall of 250,000 data scientists in 2020, while McKinsey Global Institute anticipates as much as 12 percent annual growth in demand for graduates from data science programs over the next decade.</p><p>To harness the potential of this big data revolution, you need advanced techniques.</p><p>As a graduate of the MS in Applied Data Analytics program at BU MET, you will be able to demonstrate the ability to create powerful predictions through modeling and machine learning, and drive critical business decisions—skills needed to excel in a growing list of roles such as data scientist, economist, data analyst, business intelligence analyst, systems analyst, chief analytics officer, analytics manager, marketing analyst, business analyst, or financial analyst, among others.</p>"
        },
        "paragraph3": {
            "title": "Explore Careers in Data Analytics",
            "text": "<p>Use the Career Insights tool to explore jobs that are the right fit for you. Filter by career area and job title or by industry sector to explore employment demand and average salaries. Select “Learn More” for a downloadable career report, or “Explore Other Options” to find the BU MET degree or certificate program that will prepare you for the job you want.</p>",
            "image": {
                "url": "https://www.datasciencesociety.net/wp-content/uploads/2018/12/DataCamp-Data-Science-Background.png"
            }
        },
        "paragraph4": {
            "title": "Master the Tools to Excel in Applied Data Analytics",
            "text": "<p>Offered through BU MET’s Department of Computer Science, the Master of Science in Applied Data Analytics can set you apart by adding invaluable analytics expertise, skills, and projects to your résumé.</p><p>Ideal for mid-career IT professionals or students, BU MET’s Applied Data Analytics curriculum provides solid knowledge of data analytics and examines the presentation and applications of the latest industry tools and approaches within an academically rigorous framework. Emphasizing both data analytics and applied areas—including databases, applied machine learning, and large dataset processing methods—the Applied Data Analytics master’s curriculum provides a thorough immersion in concepts and techniques for organizing, cleaning, analyzing, and representing/visualizing large amounts of data.</p>"
        }

    }
    const { container } = render(<Program program={data} />);
    expect(container).toMatchSnapshot();
});
