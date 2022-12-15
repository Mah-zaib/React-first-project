import { createContext,useReducer,useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
//import { projectauth } from "../firebase/config";
import { useFetch } from "../hooks/useFetch";

export const AuthContext = createContext()

export const authreducer =(state,action)=>{
  switch(action.type){
  case 'SIGNIN' :
    return {...state,user:action.payload } 
  case 'SIGNOUT' :
    return {...state,user:null}  
  // case 'AUTH_IS_READY':
  //   return {...state,user:action.payload,authIsReady:true}

    default:
        return state
  }
} 

export const AuthContextProvider =({children})=>{
    const [state, dispatch]=useReducer(authreducer,{
         user:null,
        authIsReady :false
    })
 // when there is some type of changes in authentication 
 useEffect(() => {
  const unsub=((user) => {
   dispatch({type:'AUTH_IS_READY' , payload: user})
    unsub()
  })
 }, [])
  // const{postData}=useAuthContext('https://auth-system-production.up.railway.app/v1/api/user/profile','GET')
    console.log('Authcontext state : ',state)

    return (
        <AuthContext.Provider value={{...state, dispatch }}>
         {children}
        </AuthContext.Provider>
    )
}