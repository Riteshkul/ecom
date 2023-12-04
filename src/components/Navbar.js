import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <nav className='nav'>
    <h1 className='site-title'>Ecommerce</h1>
        <ul>
            <li>
            <Link to="/products">Products</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
            <li>
            {props.isAuthenticated ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
            </li>
        
        {
                    props.isAuthenticated &&<Link to="/"> Welcome, {props.username}</Link>
        }
        </ul>
</nav>
  )
}

export default Navbar