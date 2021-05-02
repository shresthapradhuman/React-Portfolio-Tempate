import React from 'react'
import {Language as Data} from "../../data/Setting";
import Star from "../../components/Progress/Star/Star";

function Language() {
    return (
      <>
        <div className="language">
          {Data.map((item, index) => {
            return <Star key={index} width={item.width} title={item.title} />;
          })}
        </div>
      </>
    );
}

export default Language
