import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Fragment } from "react";


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Val List | Home</title>
        <meta name="keywords" content="lists" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor</p>
        <Link href="/lists">
          <a className={styles.btn}>
            See my list
      </a>
        </Link>
      </ div>
    </Fragment>
  )
}
