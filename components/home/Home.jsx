import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link'

const Home = () => {
    const newsground = ['N','e','w','s','G','r','o','u','n','d']
    

    return (
        <div lang="en">
            <div className={styles.info}>
                <div className={styles.infoCard}>
                    <div>
                        {newsground.map((word , index)=>{
                            return(
                            <span className={styles.word} key={index}>
                                    <p>{word}</p>
                             </span>
                            )
                        })}
                    </div>
                    <p>
                        For Students for <strong>You</strong>! 🤘<br/>
                        From Amazon till <strong>business</strong>! 🤑<br />
                        From Science till everything <strong>else</strong>! 😎<br/>
                        Only selective and useful Info🔎<br/>
                        Find the latest, top, best NEWS! Whatever you call it😏<br />
                        All in one platform only on <b>NEWSGROUND</b>📰
                    </p>
                    
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.blogDir}>
                    <img src="images/blog.png" alt="" />
                    <h3>NewsBlogs</h3>
                    <p>Find the latest, top, best NEWS! Only selective and useful Info🔎 Our two minute read blogs will get you the best!</p>
                    <Link href="/blogs">Read Blogs📚</Link>
                </div>
                <div className={styles.joinDir}>
                    <img src="images/join.png" alt="" />
                    <h3>Connect with us</h3>
                    <p>Join us on various social media platform for you getting better. Learn Coding, Self-development and just get better!</p>
                    <Link href="/join">Join Us🤝</Link>
                </div>
            </div>
        </div>

    )
}

export default Home
