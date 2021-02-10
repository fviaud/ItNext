import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Provider } from "react-redux";
import Link from 'next/link'

import store from "../redux/store";
// import "redux/project";
// import "redux/projects";
// import "redux/ressources";
// import "redux/users";

export default function Home() {

  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">MYTools!</a>
          </h1>

          {/* <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p> */}

          <div className={styles.grid}>
            <a href="/projects" className={styles.card}>
              <h3>Project &rarr;</h3>
              <p>Afficher l'ensemble de mes projets.</p>
            </a>

            <a href="/inquery" className={styles.card}>
              <h3>Inquiry &rarr;</h3>
              <p>Creer un incident!</p>
            </a>

            <a
              href="Catalogue"
              className={styles.card}
            >
              <h3>Catalogue &rarr;</h3>
              <p>Liste des offres aux catalogue</p>
            </a>

            <a
              href="/Issues"
              className={styles.card}
            >
              <h3>Issues &rarr;</h3>
              <p>
                Issues.
            </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="MonGithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
            me
          </a>
        </footer>
      </div>
    </Provider>
  )
}
