import React, { useContext } from 'react'
import { SiFirebase } from 'react-icons/si'
import { AppContext } from '../App'
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';


const auth = getAuth();

const Header = () => {

  const { route, setRoute, user, setUser } = useContext(AppContext)

const logOut = () => {
  signOut(auth).then(() => {
      setRoute("login");
      setUser(null)
      toast("LogOut exitoso")

  }).catch((error) => {
    console.log(error)
  });
}


  return (
    <header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8'>
  <div className='flex items-center gap-2 cursor-pointer' onClick={()=> setRoute('home')}>
 <SiFirebase className='text-2xl text-pink-600'></SiFirebase>
 <span className='text-xl font-semibold text-pink-600'>FireShopping v1.2.1</span>
  </div>
  
  <div className='flex gap-2'>

  {user ? (<>
<button onClick={logOut}>LogOut</button>

  </>
  ) : (

    <> 
     <button className='bg-sky-500 text-white px-3 py-1 
  rounded-full hover:bg-sky-700 transition'
  onClick={() => setRoute('login')}>Login</button>


  <button onClick={() => setRoute('register')}>... o registrate</button>
    </>
     )}
  
 
  </div>
  </header>

  )
}

export default Header
