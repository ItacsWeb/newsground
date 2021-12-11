import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../.././components/blogs/blogStyles/Category.module.css'
const PostCard = ({post}) => {
    return (
        <div className={styles.PostCard}>
            <Head>
                <title>Posts based on your Search...</title>
            </Head>
            <div className={styles.postCardDiv}>
            <img src={post.featuredImage.url} alt="" ></img>
            <h3>{post.title.slice(0, 40)}...</h3>
            <p>{(post.excerpt).toString().slice(0, 130)}...</p>
            <Link href={`/blogs/post/${post.slug}`}>Go To Post 📑</Link>
            </div>
        </div>
    )
}

export default PostCard
