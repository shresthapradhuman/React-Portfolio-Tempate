import React from "react";
import "./Profile.scss";
import { Profile as Data } from "../../../data/Setting";
import Typewriter from "typewriter-effect";
import resume from "../../../download/resume.pdf";
import ReactGA from "react-ga";
function index() {
  const gaClickHandler = () => {
    ReactGA.event({
      category:"Link",
      action:"resume download"
    })
  }
  return (
    <>
      {Data.map((user, index) => {
        return (
          <div className="profile" key={index}>
            <div className="profile__image">
              <img
                src={require(`../../../images/Profile/${user.image}`).default}
                alt="profile"
                width="100%"
                height="100%"
              />
            </div>
            <div className="profile__name">{user.name}</div>
            <div className="profile__position">
              <Typewriter
                options={{
                  strings: user.postion,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
              {/* {user.postion} */}
            </div>
            <div className="profile__social">
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
                <div className="profile__download" key={index}>
                  <a href={resume} target="_blank" onClick={gaClickHandler} rel="noreferrer">
                    {item.title}
                  </a>
                  <span className="profile__icon">{item.icon}</span>
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
