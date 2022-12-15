import styles from './Login.module.css'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import React from 'react'
import header from '../../assets/header.png'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Login() {
  const [ispending, setispending] = useState(false)
  const [email,setemail]=useState('')
const[password,setpassword]=useState('')
const {postData,data,error}=useFetch('https://auth-system-production.up.railway.app/v1/api/auth/signin','POST')
const navigate =useNavigate()
// const {login,error,ispending}=useLogin()
const handlesubmit =(e)=>{
  e.preventDefault()
  postData({email,password})
  navigate('/tools');
}
  return (
    <div className={styles['main-form']}>
     <form onSubmit={handlesubmit} className={styles['login-form']}>
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
      </label>
      {/* <button className='btn'>Login</button> */}
      {!ispending && <button className='btn'>Login</button>}
     {ispending && <button className='btn'disabled>loading</button>}
     {error && <p>{error}</p>}
    </form>
    <div className={styles['sidebar']}>
       <img src ={header} />
    </div>
    </div>
  )
}
