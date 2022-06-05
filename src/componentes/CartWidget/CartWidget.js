import React, { useState } from 'react'
import './CartWidget.css'
import { TiShoppingCart } from "react-icons/ti";


const CartWidget = () => {
    const [cart, setCart] = useState(0)
  return (
    <div className='CartWidget'>
        <TiShoppingCart />
        <p className='CountCarro'>{cart}</p>
    </div>
  )
}

export default CartWidget