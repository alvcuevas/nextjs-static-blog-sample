import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.description}>
          My Latest Articles 📝
        </h2>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
