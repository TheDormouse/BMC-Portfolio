import { Logo } from '../components/logo'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default (props) => {
    return (
        <div className={styles.container}>
                  <Head>
        <title>Ben Martinez-Cain - FullStack Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ben Martinez-Cain - FullStack Web Developer | Node.js | React | Next.js | SQL | MongoDB | GraphQL | Python | Django" />
      </Head>
      <a className={styles.skiplink}href="#main">Skip to main</a>
      <heading>
            <Logo />
            </heading>
            <main id="main" className={styles.social}>
                <p>Ben Martinez-Cain</p>
                <a href='https://github.com/TheDormouse' target='_blank'><img alt='Github' className={styles.icon} src='github.svg' width='50px' height='50px' /></a>
                <a href='https://www.linkedin.com/in/benmartinezcain/' target='_blank'><img alt='LinkedIn' src='linkedin.svg' className={styles.icon} width='50px' height='50px' /></a>
                <a href='https://twitter.com/Mad_Marchy' target='_blank'><img src='twitter.svg' alt='Twitter' className={styles.icon} width='50px' height='50px' /></a>
                <Link href='/'><a><p className={styles.days}>#100DaysOfCode</p></a></Link>
            </main>
        </div>
    )
}
