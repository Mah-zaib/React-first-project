 import './Navbar.css'
 import logo from '../assets/logo.png'

 import React from 'react';
 import { Link } from 'react-router-dom'
 
 
 export default function Navbar() {
   return (
     <div className='navbar'>
         <div className='logo'>
         <img src={logo}/>
         <Link to="/tools">TOOLS</Link>
         </div>
        
        <div className='links'>
        
        <button className='btn'><Link to="/login">Login</Link></button>
        <button className='btn'><Link to="/signup">Signup</Link></button>
       </div>  
     
     </div>
   )
 }
