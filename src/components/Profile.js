import React from 'react'
import { useFetch } from '../hooks/useFetch'
export default function Profile() {
    const [ispending, setispending] = useState(false)
    const [email,setemail]=useState('')
  const[password,setpassword]=useState('')
const {postData,data,error}=useFetch('https://auth-system-production.up.railway.app/v1/api/user/profile','GET')
    return (
    <div>

    </div>
  )
}
