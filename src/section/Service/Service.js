import React from 'react';
import "./Service.scss";
import {Service as Data} from "../../data/Setting";

function Service() {
    return (
      <>
        <div className="service">
            {Data.map((item, index)=>{
                return (
                  <div className="service__col" key={index}>
                    <div className="service__box">
                      <h3 className="service__title">{item.title}</h3>
                      <div className="service__content">
                        <p className="service__desc">
                          {item.description}
                        </p>
                        <div className="service__icon">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
        </div>
      </>
    );
}

export default Service
