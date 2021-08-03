import React from "react";
import "./Card.scss";

function Card({ name, content, lang, url }) {
  return (
    <>
      <div className="git-box">
        <a className="git-link" href={url}>
          <h2 className="git-title">{name.slice(0, 20) + ".."}</h2>
        </a>
        <p className="git-content">{content}</p>
        <h4 className="git-lang">{lang}</h4>
      </div>
    </>
  );
}

export default Card;
