import Head from "next/head";
import Image from 'next/image';
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../NavBar";

import styles from './MainLayout.module.css';

export const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className={styles.container}>
    
          <Head>
            <title>About Alfonso</title>
            <meta name="description" content="About page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>

                { children }
    
          </main>
    
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
    )
}
