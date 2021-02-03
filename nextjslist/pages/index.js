import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor</p>
      <p>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor</p>
      <Link href="/list">See my list</Link>
    </div>
  )
}
