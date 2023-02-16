import React, {useState, useContext} from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { AppContext } from '../App';


const provider = new GoogleAuthProvider();
const auth = getAuth();



const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const { setUser } = useContext(AppContext);


const hazLoginGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log('token', token);
    console.log('user', user);
    setUser(user);

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const hazLoginEmail = (e) => {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    toast(`Inicio de sesión válido`);
    setUser(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



}

  return (
    <div>
    
    <div className='text-xl font-semibold text-sky-700 mb-8'>
      Este es el login
    </div>
    <p className='text-sm mb-8'>Haz click en el siguiente botón para loguearte</p>
    <div className='flex flex-col'>
    <form onSubmit={hazLoginEmail} className='flex flex-col gap-4 max-q-sm' >
    
    <input className='border bordey-grey-200 rounded py-1 px-2 outline-none'
    type="email" value={email} onChange={e =>setEmail(e.target.value)}/>
    
    <input className='border bordey-grey-200 rounded py-1 px-2 outline-none'
    type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
    
    <button className='bg-sky-400 p-1 text-white rounded shadow'>Registrate</button>
    </form>

    <button onClick={hazLoginGoogle}>... o logueate con google</button>
    </div>
    </div>
  )
}

export default Login
