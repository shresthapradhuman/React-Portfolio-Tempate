import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import "./Card.scss";

function index(props) {
  return (
    <>
      <div className="blog__box">
        <div className="blog__thumb">
          <img
            className="blog__image"
            src={"/images/Blog/" + props.image}
            alt={props.image}
          />
          <div className="blog__content">
            <h3 className="blog__title">{props.title}</h3>
            <div className="blog__metas">
              <div className="blog__metas-item">
                <div className="blog__metas-icon">
                  <AiOutlineCalendar />
                </div>
                <div className="blog__metas-text">{props.postedOn}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog__body">
          <div className="blog__category">{props.blogCategory}</div>
          <div className="blog__excerpt">
            <p>{props.blogText.slice(0, 180)}</p>
          </div>
          <Link to={props.link + "/" + props.slug} className="blog__btn">
            Explore
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;
