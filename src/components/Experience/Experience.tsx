import "./Experience.scss";

import PathTimeline from "../PathTimeline/PathTimeline";
import experienceData from "../../assets/data/experience.json";
import { useState } from "react";

interface ExperienceItem {
  title: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
}

const Experience = () => {
  const [viewMode, setViewMode] = useState<"timeline" | "list">("timeline");
  const isListView = viewMode === "list";

  return (
    <div
      className={`experience${isListView ? " experience--list" : " experience--timeline"}`}
      id="experience"
    >
      <h2>Experience</h2>
      <div className="experience__toggle" role="group" aria-label="Experience view">
        <button
          type="button"
          className={`experience__toggle-btn${!isListView ? " is-active" : ""}`}
          onClick={() => setViewMode("timeline")}
        >
          Timeline
        </button>
        <button
          type="button"
          className={`experience__toggle-btn${isListView ? " is-active" : ""}`}
          onClick={() => setViewMode("list")}
        >
          Classic
        </button>
      </div>
      {isListView ? (
        <>
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
        </>
      ) : (
        <div className="experience__timeline">
          <PathTimeline />
        </div>
      )}
    </div>
  );
};
export default Experience;
