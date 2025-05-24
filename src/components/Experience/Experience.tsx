import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      <p>(click roles to see more information)</p>
      <ul className="experience__ul">
        <details>
          <summary>
            <span>Educator, Software Engineering - BrainStation</span> - New
            York, NY - March 2023 - current
          </summary>
          <ul>
            <li>
              Leads 12-week intensive engineering cohorts, mentoring 10–50+
              students per session through full-stack development projects using
              modern web technologies.
            </li>

            <li>
              Iteratively ships improvements to curriculum content, coding
              examples, and internal documentation to ensure technical accuracy,
              clarity, and real-world relevance.
            </li>

            <li>
              Collaborates cross-functionally to design, test, and roll out
              internal tools that streamline team workflows and enhance the
              student learning experience.
            </li>

            <li>
              Researches and integrates new technologies into the curriculum to
              keep pace with evolving industry standards, including Next.js,
              REST APIs, CI/CD pipelines, and database best practices.
            </li>

            <li>
              Known for combining clear communication with strong technical
              expertise to guide both novice and advanced learners in building
              production-grade applications.
            </li>

            <li>
              Applies a product-driven mindset to education—constantly shipping,
              refining, and iterating on curriculum and tools in response to
              user (student + instructor) feedback.
            </li>
          </ul>
        </details>
        <details>
          <summary>
            <span>Associate Educator, Software Engineering - BrainStation</span>{" "}
            - New York, NY - March 2023 - January 2024
          </summary>
          <ul>
            <li>
              Delivered lectures and provided hands-on technical mentorship to
              100+ students across multiple full-time cohorts.
            </li>

            <li>
              Led students in building full-stack applications using modern
              technologies and frameworks, emphasizing best practices in clean
              code, version control, and responsive design.
            </li>

            <li>
              Adapted and iterated on educational materials to address student
              needs, improve clarity, and align with evolving industry
              standards.
            </li>

            <li>
              Collaborated with senior educators to refine curriculum content
              and ensure consistent delivery of a high-quality learning
              experience.
            </li>

            <li>
              Known for providing clear, actionable feedback and fostering
              student confidence in tackling complex engineering problems.
            </li>
          </ul>
        </details>
        <details>
          <summary>
            <span>Software Engineer - Wunderkind</span> – New York, NY - Jan
            2022 - Jan 2023
          </summary>{" "}
          <ul>
            <li>
              Built and maintained interactive ad experiences and dynamic
              marketing components using JavaScript, jQuery, HTML, and CSS for
              50+ high-profile clients.
            </li>

            <li>
              Collaborated closely with design teams to translate visual specs
              into performant, accessible, and on-brand web experiences.
            </li>

            <li>
              Participated in agile sprint planning, daily standups, and
              cross-functional collaboration to prioritize and deliver features
              on time.
            </li>

            <li>
              Reviewed code for quality, consistency, and accessibility,
              contributing to a strong team-wide engineering culture.
            </li>

            <li>
              Regularly iterated on live campaigns, quickly deploying updates
              and optimizing for engagement, performance, and client requests.
            </li>
          </ul>
        </details>
        <details>
          <summary>
            <span>Freelance Web Developer & Digital Project Manager</span> - New
            York, NY - Mar 2020 - current
          </summary>{" "}
          <ul>
            <li>
              Designs, develops, and maintains fast, accessible, and
              mobile-responsive websites for multiple clients across industries
              using JavaScript, TypeScript, React, HTML, and CSS.
            </li>

            <li>
              Frequently ships production-ready updates with a focus on
              performance, user experience, and SEO best practices.
            </li>

            <li>
              Implements scalable front-end architectures and reusable component
              systems to streamline development and reduce maintenance overhead.
            </li>

            <li>
              Translates client goals into technical solutions, managing
              end-to-end workflows from discovery to deployment.
            </li>

            <li>
              Balances multiple projects simultaneously while meeting tight
              deadlines and adapting to shifting priorities and feature
              requests.
            </li>

            <li>
              Provides ongoing support and optimizations, using version control
              (Git) and CI/CD workflows to ensure smooth delivery and rapid
              iteration.
            </li>

            <li>
              Known for clear communication, technical agility, and the ability
              to learn quickly in unfamiliar codebases or industries.
            </li>
          </ul>
        </details>
        <details>
          <summary>
            <span>Web Developer - Government Websites - US Army </span>- Nov
            2020 - current
          </summary>{" "}
          <ul>
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
        <details>
          <summary>
            <span>Executive Officer/Musician - US Army</span> - Nov 2004 - Apr
            2025
          </summary>
          <ul>
            <li>
              Served as Executive Officer and Warrant Officer, responsible for
              the training, operations, and welfare of a 50+ member Army Reserve
              unit.
            </li>

            <li>
              Led both small teams and full-company formations, quickly adapting
              to evolving missions and consistently delivering results under
              pressure.
            </li>

            <li>
              Known for hitting the ground running in new roles, rapidly
              learning complex systems and protocols to ensure mission
              readiness.
            </li>

            <li>
              Championed the professional development of junior Soldiers,
              mentoring and empowering them to become confident, capable
              leaders.
            </li>

            <li>
              Maintained a high level of operational and administrative
              precision, ensuring accountability across HR, finance, logistics,
              and readiness tasks.
            </li>

            <li>
              Programmed, produced, and performed in 100+ high-profile military
              and community events, maintaining the Army’s public image through
              music and professionalism in multiple units.
            </li>
          </ul>
        </details>
      </ul>
    </div>
  );
};
export default Experience;
