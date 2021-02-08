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
          <h1> Hello Fred</h1>

          <Link href="/dev/">
            <a>this page!</a>
          </Link>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Provider>
  )
}
