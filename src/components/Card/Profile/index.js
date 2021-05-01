import React from "react";
import "./Profile.scss";
import { Profile as Data } from "../../../data/Setting";
import Typewriter from "typewriter-effect";

function index() {
  return (
    <>
      {Data.map((user, index) => {
        return (
          <div className="card" key={index}>
            <div className="card__image">
              <img
                src={require(`../../../images/Profile/${user.image}`).default}
                alt="profile"
                style={{ width: "100%" }}
              />
            </div>
            <div className="card__name">{user.name}</div>
            <div className="card__position">
              <Typewriter
                options={{
                  strings: user.postion,
                  autoStart: true,
                  loop:true,
                  delay:100
                }}
              />
              {/* {user.postion} */}
            </div>
            <div className="card__social">
              <ul>
                {user.social.map((icon, index) => {
                  return (
                    <li key={index}>
                      <a href={icon.url} target="_blank" rel="noreferrer">
                        {icon.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {user.download.map((item, index) => {
              return (
                <div className="card__download" key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                  <span className="card__icon">{item.icon}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default index;
