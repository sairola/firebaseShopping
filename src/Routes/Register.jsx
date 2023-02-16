import React, { useState, useContext } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { AppContext } from '../App';


const auth = getAuth();


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute, setUser } = useContext(AppContext);


const creaUsuario = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    toast(`Usuario ${email} registrado correctamente`);
    setUser(user)
    setRoute("home")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

const handleSubmit =(e) => {
e.preventDefault()
creaUsuario();

}


  return (
    <div className='flex flex-col gap-4'>
    <h1 className='text-sky-600 font-semibold text-center items-center'>¡Registrate para obtener acceso a la mejor app del mundo!</h1>
    
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-q-sm' >
    
    <input className='border bordey-grey-200 rounded py-1 px-2 outline-none'
    type="email" value={email} onChange={e =>setEmail(e.target.value)}/>
    
    <input className='border bordey-grey-200 rounded py-1 px-2 outline-none'
    type="text" value={password} onChange={e =>setPassword(e.target.value)}/>
    
    <button className='bg-sky-400 p-1 text-white rounded shadow'>Rgistrate</button>
    </form>
    
    </div>
  )
}

export default Register
