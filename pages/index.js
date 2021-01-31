import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';

import styles from '../styles/Home.module.css';

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.description}>My Latest Articles 📝</h2>
        <div className={styles.grid}>
          {articles.map(article => (
            <Link href={`/blog/${article}`} key={article}>
              <a className={styles.card}>
                <h3>{article.split('-').join(' ')} &rarr;</h3>
                <p>Find in-depth information about this topic.</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('articles');
  const articles = files.map(file => file.replace('.md', ''));

  return {
    props: {
      articles
    }
  };
}
