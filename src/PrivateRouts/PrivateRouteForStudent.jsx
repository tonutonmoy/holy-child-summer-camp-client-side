import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouteForStudent = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [checkingUser,setCheckingUser]=useState();


    useEffect(()=>{

        fetch(`https://holy-child-summer-camp-server-side.vercel.app/checkingUser/${user?.email}`)
        .then(res=> res.json())
        .then(res=> setCheckingUser(res))
        .catch(error=> console.log(error))  
 
 
     },[user]);

     console.log(checkingUser,'checkeng')
      
    if(loading || !checkingUser){

      return  <div>loading...</div>
    }

     if(user && checkingUser?.message==='student'){
      return  children
     }
    
  return     <Navigate to='/' ></Navigate>
};

export default PrivateRouteForStudent;