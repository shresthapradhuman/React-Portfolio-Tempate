import React from "react";
import Circle from "../../components/Progress/Circle/Circle";
import { Coding as Data } from "../../data/Setting";
import "./Coding.scss";

function Coding() {
  return (
    <>
      <div className="coding">
        {Data.map((item, index) => {
          return (
            <Circle
              key={index}
              title={item.title}
              percentage={item.percentage}
              color="green"
            />
          );
        })}
      </div>
    </>
  );
}

export default Coding;
