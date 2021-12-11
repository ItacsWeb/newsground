import moment from "moment";
import React from "react";
import styles from "./blogStyles/PostDetail.module.css";

const PostDetail = ({ post }) => {


  return (
    <div className={styles.PostDetail}>
      <h1>{post.title}</h1>
      <div className={styles.featuredFirst}>
        <img src={post.featuredImage.url} alt="" className={styles.postDetailImage}/>
        <p>{post.excerpt}</p>
      </div>
      <img src={post.inPostPhoto[0].url} alt="" className={styles.inPostPhoto}></img>
      <div className={styles.authorDate}>
        <h3>Written by : {post.author.name}</h3>
        <h3>Written on : {moment(post.createdAt).format("MMM  DD,  YYYY")}</h3>
        <h3>Categories: {post.categories[0].name}</h3>
      </div>
      <div dangerouslySetInnerHTML={{__html: post.content.html}} ></div>       
    </div>
  );
};

export default PostDetail;
