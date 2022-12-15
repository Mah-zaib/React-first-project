import styles from './Signup.module.css'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'  
import header from '../../assets/header.png'




// import { useSignup } from '../../hooks/useSignup'

import React from 'react'

export default function Signup() {
const [email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[name,setName]=useState('')
  const {postData,data,error}=useFetch('https://auth-system-production.up.railway.app/v1/api/auth/signup','POST')
  const handlesubmit =(e)=>{
  e.preventDefault()
  postData({email,name,password})
  }
  return (
  <div className={styles['main-form']}>
  <form onSubmit={handlesubmit} className={styles['signup-form']}>
    <h2>Signup</h2>
    <label>
      <span>name:</span>
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
    </label>
    <label>
      <span>email:</span>
      <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
    </label>
    <label>
      <span>password:</span>
      <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
    </label>
    <button className='btn'>Signup</button>
    {/* {!ispending && <button className='btn'>Signup</button>}
     {ispending && <button className='btn'disabled>loading</button>}
     {error && <p>{error}</p>} */}
  </form>
  <div className={styles['sidebar']}>
       <img src ={header} />
    </div>
  </div> 
  )
}
