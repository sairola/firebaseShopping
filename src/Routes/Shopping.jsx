import React, {useContext} from 'react'
import { AppContext } from '../App'



const Shopping = () => {

const { setRoute } = useContext(AppContext)

  return (
    <div>
    Bienvenido a tienda online shoppin    
    </div>
  )
}

export default Shopping
