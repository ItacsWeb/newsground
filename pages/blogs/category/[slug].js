import React from 'react'
import Head from 'next/head'
import { PostCard } from '../../../components/blogs'
import { getCategories, getCategoryPost } from '../../../services';
import styles from '../../../components/blogs/blogStyles/Category.module.css'
import { useRouter } from 'next/router'

const CategoryPage = ({ posts }) => {
  const router = useRouter()
  if (router.isFallback) {
      return <div style={{color:"white",fontFamily:"var(--font-roboto)",alignItems: "center"}}>Loading...</div>
    }
  return (
    <div className={styles.slug} lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#0089af" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <h1>Posts based on your search :)</h1>
      <div className={styles.categoryDisplayPageContent}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

export default CategoryPage