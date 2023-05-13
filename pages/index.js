import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <title>project</title>
        
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>Personalized fitness and meal planner</h1>
      
      <nav>
      <Link href="/about">About</Link>
      <Link href="/admin/signin"> Sign in</Link>|
<Link href="./admin/admin_dashboard">ADMIN</Link> |
<a href="/js/">PLANNER</a> |Warning: Invalid DOM property `for`. Did you mean `htmlFor`?
    at label
    at div
    at form
    at body
    at main
    at signin
    at App (webpack-internal:///./pages/_app.js:11:16)
    at StyleRegistry (/home/saikha/next_me/next_me/node_modules/styled-jsx/dist/index/index.js:449:36)
    at PathnameContextProviderAdapter (/home/saikha/next_me/next_me/node_modules/next/dist/shared/lib/router/adapters.js:60:11)
    at AppContainer (/home/saikha/next_me/next_me/node_modules/next/dist/server/render.js:294:29)
    at AppContainerWithIsomorphicFiberStructure (/home/saikha/next_me/next_me/node_modules/next/dist/server/render.js:330:57)
    at div
    at Body (/home/saikha/next_me/next_me/node_modules/next/dist/server/render.js:620:21)
Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.
    at input
    at label
    at div
    at form
    at body
    at main
    at signin
    at App (webpack-internal:///./pages/_app.js:11:16)
    at StyleRegistry (/home/saikha/next_me/next_me/node_modules/styled-jsx/dist/index/index.js:449:36)
    at PathnameContextProviderAdapter (/home/saikha/next_me/next_me/node_modules/next/dist/shared/lib/router/adapters.js:60:11)
    at AppContainer (/home/saikha/next_me/next_me/node_modules/next/dist/server/render.js:294:29)
    at AppContainerWithIsomorphicFiberStructure (/home/saikha/next_me/next_me/node_modules/next/dist/server/render.js:330:57)
    at div
    at Body (/home/saikha/next_me/next_me/node_modules/next/dist/server/render.js:620:21)
<a href="/python/">CONTACT US</a>

      </nav>
          
        <div className={styles.center}>
          <Image

            src="/home_icon.jpg"
            alt="home.js Logo"
            width={500}
            height={400}
            prioritynext 
          />
          
        </div>

       
      </main>
    </>
  )
}
