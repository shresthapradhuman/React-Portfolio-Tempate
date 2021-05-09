import React from 'react'
import Information from '../../section/Information/Information'
import Service from '../../section/Service/Service'

function About() {
    return (
      <>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>About</span> Us
            </div>
          </div>
          <div className="box__body">
            <Information />
          </div>
        </div>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>My </span>Services
            </div>
          </div>
          <div className="box__body">
            <Service />
          </div>
        </div>
      </>
    );
}

export default About
