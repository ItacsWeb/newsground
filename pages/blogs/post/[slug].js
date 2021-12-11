import React from 'react'
import Head from 'next/head'
import { getPosts, getPostDetails } from '../../../services'
import { PostDetail, PostWidget } from '../../../components/blogs';
import { useRouter } from 'next/router'

import styles from '../../../components/blogs/blogStyles/Slug.module.css'

const FullPost = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div style={{color:"white",fontFamily:"var(--font-roboto)",alignItems: "center"}}>Loading...</div>
      }
    return (
        <div className={styles.slug} lang="en">
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#0089af" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <div className={styles.center}>
                <PostDetail post={post} author={post.author} ></PostDetail>
            </div>
            <div className={styles.right}>
                <PostWidget />
            </div>
        </div>
    )
}


export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);

    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true
    }
}


export default FullPost