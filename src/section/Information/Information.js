import React from 'react'
import {Info as Data } from "../../data/Setting";
import "./Information.scss"

function Information() {
    return (
      <>
      {Data.map((item, index)=>{
          return (
            <div className="information" key={index}>
              <p className="information__desc" dangerouslySetInnerHTML={ { __html: item.desc } }>
              </p>
              {item.info.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>
                      <span className="information__title">Age</span>
                      <span className="information__value">{item.age}</span>
                    </li>
                    <li>
                      <span className="information__title">Residence</span>
                      <span className="information__value">
                        {item.resident}
                      </span>
                    </li>
                    <li>
                      <span className="information__title">Freelance</span>
                      <span className="information__value">
                        {item.freelancer}
                      </span>
                    </li>
                    <li>
                      <span className="information__title">Address</span>
                      <span className="information__value">{item.address}</span>
                    </li>
                  </ul>
                );
              })}
            </div>
          );
      })}
      </>
    );
}

export default Information
