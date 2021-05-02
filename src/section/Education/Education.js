import React from 'react'
import "./Education.scss"
import {Education as Data} from '../../data/Setting';
function Education() {
    return (
      <>
      {Data.map((item, index)=>{
          return (
            <div className="education" key={index}>
              <div className="education__year">
                <span>{item.year}</span>
              </div>
              <div className="education__institute">{item.institute}</div>
              <div className="education__country">{item.country}</div>
              <div className="education__description">
                {item.description}
              </div>
            </div>
          );
      })}
      </>
    );
}

export default Education
