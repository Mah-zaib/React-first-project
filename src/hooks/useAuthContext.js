import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";


 export const useAuthContext = (url,method ="GET",token)=>{
    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(false)
    const [error, setError] = useState(null)
    const [options,setoptions]=useState(null)

    const context = useContext(AuthContext)
    const postData = (postData) =>{
        setoptions({
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                " Authorization": 'Bearer ' + localStorage.getItem('token',token) 
            },
            body: JSON.stringify(postData)
        })
         
    }



    // if(!context){
    //     throw Error("useAuthContext must be Authcontextprovider")
    // }
    return { postData }
} 