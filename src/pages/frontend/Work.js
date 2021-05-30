import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Git/Card";
import "../../styles/pages/Work.scss";

function Work() {
  const [repos, setRepos] = useState([]);
  const handleClick = async () => {
    const response = await fetch(
      "https://api.github.com/users/shresthapradhuman/repos",
      {
        headers: {
          Authorization: "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",
        },
      }
    );
    setRepos(await response.json());
  };

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div>
      <div className="box">
        <div className="box__header">
          <div className="box__header-title">
            <span>W</span>orks And Project
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
