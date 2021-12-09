import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'
import {getRecentPosts , getSimilarPosts} from '../../services'

import styles from './blogStyles/PostWidget.module.css'

const PostWidget = ({categories , slug}) => {

    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if(slug){
            getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result))
        }
        else{
            getRecentPosts().then((result) => setRelatedPosts(result))
        }
       
    }, [slug])
    return (
        <div className={styles.PostWidget}>
            <h3 className={styles.postWidgetTitle}>
               Our Latest Posts:
            </h3>
            <div className={styles.displayWidget}>

            {relatedPosts.map((post) => (
                <Link href={`/blogs/post/${post.slug}`} key={post.slug}>
                <div  className={styles.postWidgetContent}>
                    <div className={styles.postWidgetImage}>
                        <Image src={post.featuredImage.url} 
                        alt="" 
                        className={styles.postWidgetImg} ></Image>
                    </div>
                    <div className={styles.postWidgetIntro}>
                        <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                        <h3>{post.title.slice(0, 49)}...</h3>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default PostWidget
