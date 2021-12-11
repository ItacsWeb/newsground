import { getPosts, getRecentPostsCard } from "../../services";
import { Categories} from "../../components/blogs";
import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from "next/link";

import styles from "../../components/blogs/blogStyles/blog.module.css";

export default function Blog({ posts }) {

  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    getRecentPostsCard().then((result) => setRelatedPosts(result))
  }, [])

  return (
    <div className={styles.blogs} lang="en">
      <Head>
        <title>Blogs and Posts</title>
        <meta name="description" content="Here is a world were you can see and read everything. Connect with us by our blogs. Know what is happening in the world. Read , learn , repeat with ITACS blogs and posts. Latest to the oldest everythign here only on ITACS!" />
      </Head>
      <div className={styles.cat}>
      <Categories />
      </div>
      <div className={styles.gridBlog}>
     
        {relatedPosts.map((post) => {
          return (
            <div className={styles.cardBlogDiv} key={post.id}>
              <div className={styles.cardBlog} >
                <img src={post.featuredImage.url} alt=""></img>
                <h3>{post.title.slice(0, 40)}...</h3>
                <p>{(post.excerpt).toString().slice(0, 130)}...</p>
                <Link href={`/blogs/post/${post.slug}`} title={`Let's go to ${post.title}`}>Read This Article📖</Link>
              </div>
              </div>
          )
        })}

      </div>
      <div className={styles.widget}>

      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

