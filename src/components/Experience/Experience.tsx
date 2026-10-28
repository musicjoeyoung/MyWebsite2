import "./Experience.scss";

import PathTimeline from "../PathTimeline/PathTimeline";
import experienceData from "../../assets/data/experience.json";
import { useViewStyle } from "../../contexts/ViewStyleContext";

interface ExperienceItem {
  title: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
}

const Experience = () => {
  const { viewStyle } = useViewStyle();
  const isAI = viewStyle === "ai";

  if (isAI) {
    return (
    <section className="experience experience--timeline" id="experience" aria-labelledby="experience-heading">
    <h2 className="visually-hidden" id="experience-heading">Experience</h2>
    <div className="experience__timeline">
      <PathTimeline />
    </div>
    </section>
  );
  }

  return (
  <section className="experience experience--list" id="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>
    <p>Expand each role to see more information.</p>
    <ul className="experience__ul">
    {(experienceData as ExperienceItem[]).map((item, index) => (
      <li key={`${item.title}-${item.start}-${index}`}>
        <details>
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
      </li>
    ))}
    </ul>
  </section>
  );
};
export default Experience;
