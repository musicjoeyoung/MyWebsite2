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
      <div className="experience experience--timeline" id="experience">
        <div className="experience__timeline">
          <PathTimeline />
        </div>
      </div>
    );
  }

  return (
    <div className="experience experience--list" id="experience">
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
