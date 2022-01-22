import React from 'react'
import Education from '../section/Education/Education';
import { FaBriefcase, FaUniversity, FaCode, FaFlag } from "react-icons/fa";
import '../styles/pages/Resume.scss'
import  Experience  from '../section/Experience/Experience';
import Language from '../section/Language/Language';
import Coding from '../section/Coding/Coding';

function Resume() {
    return (
      <>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>R</span>esume
            </div>
          </div>
          <div className="box__body">
            <div className="resume">
              <div className="resume__col">
                <div className="resume__header">
                  <div className="resume__icon">
                    <FaBriefcase />
                  </div>
                  <div className="resume__title">experience</div>
                </div>
                <div className="resume__content">
                  <Experience />
                </div>
              </div>
              <div className="resume__col">
                <div className="resume__header">
                  <div className="resume__icon">
                    <FaUniversity />
                  </div>
                  <div className="resume__title">education</div>
                </div>
                <div className="resume__content">
                  <Education />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>My </span>Skills
            </div>
          </div>
          <div className="box__body">
            <div className="resume">
              <div className="resume__col">
                <div className="resume__header">
                  <div className="resume__icon">
                    <FaCode />
                  </div>
                  <div className="resume__title">Coding</div>
                </div>
                <div className="resume__content">
                  <Coding/>
                </div>
              </div>
              <div className="resume__col">
                <div className="resume__header">
                  <div className="resume__icon">
                    <FaFlag />
                  </div>
                  <div className="resume__title">Language</div>
                </div>
                <div className="resume__content">
                  <Language/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Resume
