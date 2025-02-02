import { auth, signIn, signOut } from '@/auth'
import React from 'react'

const Navbar = async () => {
  const session = await auth();
  
  

  return (
    <header>
      <nav className="flex justify-between shadow-md px-5 py-3  border-b-orange-200">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="flex gap-4 ">
          {session && session?.user ? (
            <div>
              {/* <Link href={`/user/${session?.id}`}> */}
                <span>{session?.user?.name}</span>
              {/* </Link> */}
              <form action={async()=>{
                "use server";
                await signOut({redirectTo: '/'});
              }} >
                <button type="submit">Logout</button>
              </form>
            </div>
          ) : (
            <form action={ async () => {
              "use server"
              await signIn('github');
            }}>
              <button type='submit'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar