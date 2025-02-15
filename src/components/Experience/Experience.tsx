import "./Experience.scss"

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <h2>Experience</h2>
            <p>(click roles to see more information)</p>
            <ul className="experience__ul" >
                <details >
                    <summary>
                        <span>Educator, Software Engineering - BrainStation</span> - New York,
                        NY - March 2023 - current
                    </summary>
                    <ul>
                        <li>
                            Delivers lectures and mentors the next wave of engineering
                            talent by providing expert technical guidance to students who
                            are building exciting projects using the most cutting-edge
                            technologies.
                        </li>
                        <li>
                            Works on writing and researching new content to teach the most
                            up-to-date skills in development to students.
                        </li>
                    </ul>
                </details>
                <details >
                    <summary>
                        <span>Associate Educator, Software Engineering - BrainStation</span> - New York,
                        NY - March 2023 - January 2024
                    </summary>
                    <ul>
                        <li>
                            Delivers lectures and mentors the next wave of engineering
                            talent by providing expert technical guidance to students who
                            are building exciting projects using the most cutting-edge
                            technologies.
                        </li>
                    </ul>
                </details>
                <details >
                    <summary>
                        <span>Software Engineer - Wunderkind</span> – New York, NY - Jan 2022 - Jan 2023
                    </summary>                    <ul>
                        <li>
                            Successfully integrated internal platform with client campaigns
                            with vanilla Javascript and in-house tools while writing
                            maintainable, reliable, scalable, and testable code
                        </li>
                        <li>
                            Built out new functionality and maintained existing APIs to
                            ensure code is clean and efficient
                        </li>
                        <li>
                            Reviewed code for peers and assessed tools and resources for web
                            accessibility implementation
                        </li>
                        <li>
                            Utilized Javascript, HTML, CSS, and jQuery to create efficient
                            and user-friendly marketing campaigns for hundreds of major
                            companies
                        </li>
                    </ul>
                </details>
                <details >
                    <summary>
                        <span>Freelance Web Designer & Manager</span> - New York, NY - Mar 2020 - current
                    </summary>                    <ul>
                        <li>
                            Designs, builds, and maintains various websites for clients
                            using Javascript, React, HTML, and CSS
                        </li>
                    </ul>
                </details>
                <details >
                    <summary>
                        <span>Web Designer & Manager - US Army, Reserves </span>- Nov 2004 - current
                    </summary>                    <ul>
                        <li>
                            Website Manager - Designs, builds, and maintains website for the
                            78th Army Reserves Band using Javascript, React, HTML and CSS
                        </li>
                        <li>
                            Serves as a Warrant Officer, responsible for the management and
                            well-being of a 50+ person team in all aspects related to HR,
                            finance, and training
                        </li>
                        <li>
                            Programs, produces, and performs at 100+ community and training
                            events in the tri-state area
                        </li>
                    </ul>
                </details>
            </ul>
        </div>
    )
}
export default Experience