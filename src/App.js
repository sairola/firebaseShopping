import React, { useState, createContext } from 'react';
import { app, messaging } from './firebase';
import Header from './components/Header';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Shopping from './Routes/Shopping';
import TaskList from './components/TaskList';



import  { Toaster, toast } from 'react-hot-toast';

import { onMessage } from 'firebase/messaging';
import Footer from './components/Footer';



export const AppContext  = createContext(null);


onMessage(messaging, payload => {
  console.log("nueva noticiafición en directo", payload);
  toast.custom(t => (
    <div className='bg-sky-300 p-4 rounded-lg shadow-lg'>
      <h1 className='text-lx text-sky-700 font-semibold'>{payload.notification.title}</h1>
      <p className='text-sm text-sky-400'>{payload.notification.body}</p>
    </div>
  )) 
})

function App() {

  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

return (
<AppContext.Provider value={{route, setRoute, user, setUser}}>
<div className='h-screen'>
<Toaster></Toaster>
 <Header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0'></Header>
<main className='p-6 py-10'> 

{route === "home" && <Home></Home>}

{route === "login" && <Login></Login>}

{route === "register" && <Register></Register>}

{route === "shopping" && <Shopping></Shopping>}

{route === "taskList" && <TaskList></TaskList>}

{user && <p>Usuario logueado: {user.email}</p>}


</main>
  
  <Footer></Footer>

</div>
</AppContext.Provider>
)

}

export default App