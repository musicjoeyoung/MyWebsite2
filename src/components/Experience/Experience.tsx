import "./Experience.scss";

import experienceData from "../../assets/data/experience.json";

interface ExperienceItem {
  title: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
}

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      <p>(click roles to see more information)</p>
      <ul className="experience__ul">
        {(experienceData as ExperienceItem[]).map((item, index) => (
          <details key={`${item.title}-${item.start}-${index}`}>
            <summary>
              <span>{item.title}</span>
              {item.location ? ` - ${item.location}` : ""} - {item.start} - {item.end}
            </summary>
            <ul>
              {item.highlights.map((highlight, highlightIndex) => (
                <li key={`${item.title}-highlight-${highlightIndex}`}>
                  {highlight}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </ul>
    </div>
  );
};
export default Experience;
