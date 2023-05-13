import Head from 'next/head'
import Link from "next/link"

export default function admin_dash() {
    return (
      <>
        <Head>
       <title>signin</title>
        
       </Head>

        <main>
        <h1>Personalized fitness and meal planner</h1>
        
  


<div>
  <div>
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
      <ul>
        <li><Link href="/admin/view_admin_profile">View own profile</Link></li>
        <li><Link href="/admin/edit_admin_profile">Edit profile</Link></li>
        <li><Link href="/admin/Add_admin">Add an admin</Link></li>
        <li><Link href="/admin/view_planners">View planners</Link></li>
        <li><Link href="/admin/reg_planner">Register planner</Link></li>
        <li><Link href="/admin/view_reg_request">View Registratin requests</Link></li>
        <li><Link href="/admin/view_user_list">View User list</Link></li>
        <li><Link href="/admin/view_workout_modules">View workout modules</Link></li>
        <li><Link href="/admin/view_mealplan_modules">View mealplan modules</Link></li>
        <li><Link href="/admin/view_user_list">View User list</Link></li>
        
      </ul>
      </nav>
    </div>
    
    
    <div >
      <div>
        <h4>Dashboard</h4>
        <p>info from database</p>
      </div>
      <div >
        <div>
          <div>
            <h4>Users</h4>
            <p>1 Million</p> 
          </div>
        </div>
        <div >
          <div>
            <h4>Planners</h4>
            <p>100 </p> 
          </div>
        </div>
        <div >
          <div >
            <h4>total user entry</h4>
            <p>10 Million</p> 
          </div>
        </div>
        <div >
          <div>
            <h4>user reach monthly</h4>
            <p>30%</p> 
          </div>
        </div>
      </div>
    
    
       
      </div>
    </div>
  </div>





         
        </main>
        
      </>
    )
  }
  