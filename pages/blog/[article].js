import React from 'react';
import Head from 'next/head';
import matter from 'gray-matter';
import marked from 'marked';
import path from 'path';
import fs from 'fs';

import styles from '../../styles/Home.module.css';

export default function Article({ metadata, content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{metadata.title}</title>
        <meta title="description" content={metadata.description}></meta>
      </Head>
      <main className={styles.main}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const articles = fs.readdirSync('articles');
  const paths = articles.map(article => ({
    params: {
      article: article.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params: { article } }) {
  const markdownFile = fs.readFileSync(path.join('articles', article + '.md')).toString();
  const markdownParsed = matter(markdownFile);
  const markdownHTML = marked(markdownParsed.content);

  return {
    props: {
      metadata: markdownParsed.data,
      content: markdownHTML
    }
  };
}
