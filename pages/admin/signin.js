import Head from 'next/head'
import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function signin() {
  return (
    <>
      <Head>
      
        
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>Personalized fitness and meal planner</h1>
      
      <nav>
<Link href="/">HOME</Link> |
<Link href="/admin/signin">ADMIN</Link> |
<Link href="/admin/admin_dashboard">ADMIN DASHBOARD</Link> |
</nav>
<body>
<h2>signin</h2>

<form >
  
  <div >
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
    <br></br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    <br></br>   
    <button type="submit">Login</button>
    <br></br>
    <label>
      <input type="checkbox" checked="onChange" name="remember"/> Remember me
    </label>
  </div>
  <br></br>
  <div>
    <button type="button" >Cancel</button>
    <br></br>
    <span >Forgot <Link href="/admin/renew_pass">password?</Link></span>
  </div>
</form>

</body>


       
      </main>
    </>
  )
}
