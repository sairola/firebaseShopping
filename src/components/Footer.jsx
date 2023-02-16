import React, { useContext } from 'react';
import {GrHome} from 'react-icons/gr';
import {BsCartFill, BsList} from 'react-icons/bs'
import { AppContext } from '../App';

const Footer = () => {
    const { setRoute } = useContext(AppContext)


  return (
    <footer className= 'fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
<div className='bg-sky-200 text-3xl p-2 rounded-full cursor-pointer hover:bg-sky-50 transition '>
<GrHome onClick={()=> setRoute("home")}></GrHome>
</div>

<div className='bg-sky-200 text-3xl p-2 rounded-full cursor-pointer hover:bg-sky-50 transition'>
<BsCartFill onClick={()=> setRoute("shopping")}></BsCartFill>
</div>


<div className='bg-sky-200 text-3xl p-2 rounded-full cursor-pointer hover:bg-sky-50 transition'>
<BsList onClick={()=> setRoute("taskList")}></BsList>
</div>


    </footer>
  )
}

export default Footer
