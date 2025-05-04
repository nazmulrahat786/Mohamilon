import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase.init';

const AuthProvider = ({children}) => {


    const [user,setUser]= useState(null)

    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }

// onAuthStateChanged(auth, (currentUser)=>{
// if(currentUser){
//     console.log('hase user',currentUser);
// }
// else{
//     console.log(currentUser);
// }
// })


useEffect(()=>{
    const unSubscribe  = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
            // console.log('hase user',currentUser);
            setUser(currentUser)
        }
        })
        return ()=>{
            unSubscribe()
          }
},[])








    const userInfo ={
        user,
       creatUser,
       signInUser,
       signOutUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>  
    );
};

export default AuthProvider;