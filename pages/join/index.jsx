import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './join.module.css'

const Join = () => {
  return (
    <div className={styles.join} lang="en">
      <Head>
        <title> Join NewsGround!</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#0089af" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className={styles.youtube}>
        <i className="fa fa-youtube-play"></i>
        <Link href="https://www.youtube.com/channel/UChbXC4SWNnnzOGJrt8WNsig?sub_confirmation=1" rel="noreferrer"><a target="_blank">YouTube</a></Link>
      </div>
      <div className={styles.instagram}>
        <i className="fa fa-instagram"></i>
        <Link href="https://www.instagram.com/codewithitacs/" rel="noreferrer"><a target="_blank">Instagram</a></Link>
      </div>
      <div className={styles.stackOverflow}>
        <i className="fa fa-stack-overflow"></i>
        <Link href="https://stackoverflow.com/users/17191273/itacs" target="_blank" rel="noreferrer"><a target="_blank"> Stack <br /> Overflow </a></Link>
      </div>
      <div className={styles.github}>
        <i className="fa fa-github"></i>
        <Link href="https://github.com/ItacsWeb"><a target="_blank" rel="noreferrer">Github</a></Link>
      </div>
    </div>
  )
}

export default Join
