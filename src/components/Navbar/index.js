import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import {Navbar as Data} from '../../data/Setting';

function index() {
  return (
    <>
      <ul className="nav">
          {Data.map((item, index)=>{
              return (
                <li className="nav-item" key={index}>
                  <NavLink to={item.path} activeClassName="nav-active" className="nav-link">
                    <span className="nav-icon">
                      {item.icon}
                    </span>
                    <span className="nav-text">{item.title}</span>
                  </NavLink>
                </li>
              );
          })}
      </ul>
    </>
  );
}

export default index;
