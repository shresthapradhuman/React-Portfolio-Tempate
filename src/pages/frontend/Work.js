import React from 'react'

function Work() {
    return (
      <div>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>W</span>orks And Project
            </div>
            <div className="box__header-search">
              <input
                type="text"
                className="box__header-input"
                placeholder="Search Work Here...."
              />
            </div>
          </div>
          <div className="box__body">
            <div className="blog">
            </div>
          </div>
        </div>
      </div>
    );
}

export default Work
