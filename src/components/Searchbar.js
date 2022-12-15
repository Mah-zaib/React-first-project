import React from 'react'
import styles from './Searchbar.module.css'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Searchbar() {
    const [term, setterm] = useState('')
    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${term}`)
                //q=?
        }
  return (
    <div className={styles['main-header']}>
    <div className={styles['main']}>
    <div className={styles['logo']}><img src={logo}/> </div>
     <div className='searchbar'>
            <form onSubmit={handlesubmit}>
                <label htmlFor='search'>Search:</label>
                <input type="text"
                       id="search"
                       onChange={(e) => setterm(e.target.value)}
                       required
                />
            </form>
      </div>

     </div>
      <div className={styles['profile-section']}>
      <button className='btn'><Link to="/login">Login</Link></button>
      {/* <img className={styles['profile']} src={profile}/> */}
      </div>

    </div>
  )
}
