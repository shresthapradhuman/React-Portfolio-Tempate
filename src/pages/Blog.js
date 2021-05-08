import React from "react";
import { useState } from "react";
import BlogCard from "../components/Card/Blog";
import data from "../data/blog.json";
function Blog() {
  const [post, setPost] = useState(data.blog);
  const [message, setMessage] = useState();
  const searchHandler = (e) => {
    let searchValue = e.target.value;
    if (searchValue) {
      let result = data.blog.filter((item) =>
        item.blogTitle.toLowerCase().includes(searchValue.toLowerCase())
      );
      setMessage(result.length > 0 ? false : true)
      setPost(result);
    } else {
      setPost(data.blog);
      setMessage(false);
    }
  };
  console.log(post);
  return (
    <>
      <div className="box">
        <div className="box__header">
          <div className="box__header-title">
            <span>B</span>log
          </div>
          <div className="box__header-search">
            <input
              type="text"
              onChange={searchHandler}
              className="box__header-input"
              placeholder="Search Post Here...."
            />
          </div>
        </div>
        <div className="box__body">
          <div className="blog">
            {message === true ? <p className="box__error">Sorry No Result Found !</p> : ''}
            {post.map((blog) => {
              return (
                <BlogCard
                  title={blog.blogTitle}
                  postedOn={blog.postedOn}
                  blogCategory={blog.blogCategory}
                  blogText={blog.blogText}
                  image={blog.blogImage}
                  key={blog.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
