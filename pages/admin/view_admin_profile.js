import Head from 'next/head'
import Link from "next/link"

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
export default function view_admin() {
    return (
      <>
        <Head>
       <title>signin</title>
        
       </Head>
        <main>
        <h1>Personalized fitness and meal planner</h1>
        
  
        
        <body>


<div>
  <div>
    <div>
      <h2>Admin Dashboard</h2>
    </div>
    <table style="width:100%">
  <caption>ADMIN INFO</caption>
  <tr>
   <th>index</th>
    <th>name</th>
    <th>email</th>
    <th>birthdate</th>
  </tr>
  <tr>
    <td>1</td>
    <td>saikha</td>
    <td>saikha.@gmail.com</td>
    <td>s17.3839</td>
  </tr>
 
</table>
    
    
    
    
       
      </div>
    </div>
 


</body>


         
        </main>
      </>
    )
  }