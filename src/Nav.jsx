import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <div className="logoblock">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfSiBLzfLdLSCQ7Y0pNChTMLzEgzcRqHNiw&usqp=CAU' />
        </div>
        <div className="menublock">
            <ol>
                <li><Link to={"product"}>Product</Link></li>
                <li><Link to={"cart"}>Cart</Link></li>
            </ol>
        </div>
    </nav>
  )
}

export default Nav