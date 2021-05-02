import React from "react";
import "./Experience.scss";
import { Experience as Data } from "../../data/Setting";
function Experience() {
  return (
    <>
      {Data.map((item, index) => {
        return (
          <div className="experience" key={index}>
            <div className="experience__year">
              <span
                className={
                  "experience__year--span" +
                  `${item.year.search("av") ? "" : "experience__year--active"}`
                }
              >
                {item.year.replace('av,', '')}
              </span>
            </div>
            <div className="experience__position">{item.position}</div>
            <div className="experience__company">{item.company}</div>
            <div className="experience__description">
              {item.description}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
