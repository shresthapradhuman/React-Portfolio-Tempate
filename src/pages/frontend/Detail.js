import React from 'react'
import '../../styles/pages/Detail.scss'
import data from '../../data/blog.json'
import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaStackOverflow } from "react-icons/fa";

function Detail(props) {
    const [post, setPost] = useState({
      id: "",
      blogCategory: "",
      blogTitle: "",
      postedOn: "",
      author: "",
      blogImage: "",
      blogText: "",
    });
    const [slug, setSlug] = useState("");
    useEffect(() => {
      const slug = props.match.params.slug;
      const post = data.blog.find((post) => post.slug === slug);
      setPost(post);
      setSlug(slug);
    }, [post, props.match.params.slug]);
    return (
      <>
        <div className="box">
          <div className="box__header">
            <div className="box__header-title">
              <span>Blog</span> Detail
            </div>
          </div>
          <div className="box__body" style={{marginBottom:"0"}}>
            <div className="detail__box">
              <div className="detail__header">
                <h2 className="detail__title">{post.blogTitle}</h2>
                <ul className="detail__metas">
                  <li>{post.author}</li>
                  <li>{post.blogCategory}</li>
                  <li>{post.postedOn}</li>
                </ul>
              </div>
              <div className="detail__body">
                <img
                  src={"/images/Blog/" + post.blogImage}
                  alt={post.blogImage}
                  className="detail__image"
                />
                <div className="detail__content">
                  {post.blogText}
                </div>
              </div>
              <div className="detail__footer">
                <div className="detail__share">
                  <p className="detail__share-label">Share On</p>
                  <ul className="detail__share-icon">
                    <li><FaFacebookF/></li>
                    <li><FaTwitter/></li>
                    <li><FaStackOverflow/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Detail
