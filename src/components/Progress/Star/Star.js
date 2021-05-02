import React from 'react'
import "./Star.scss"

function Star(props) {
    return (
      <>
        <div className="star">
          <div className="star__title">{props.title}</div>
          <div className="star__bar">
            <div className="star__tp" style={{ width: `${props.width}` }}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className="star__bt">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </>
    );
}

export default Star
