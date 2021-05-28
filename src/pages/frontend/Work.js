import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Git/Card";
import "../../styles/pages/Work.scss";

function Work() {
  const [repos, setRepos] = useState([]);
  const handleClick = async () => {
    const response = await fetch("https://api.github.com/users/shresthapradhuman/repos");
    setRepos(await response.json());
  };
  useEffect(() => {
    handleClick();
  }, []);
  console.log(repos)
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
          <div className="work">
            {repos.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name}
                  content={item.description}
                  lang={item.language}
                  url={item.html_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
