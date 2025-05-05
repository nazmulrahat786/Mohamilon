import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase.init';

const AuthProvider = ({children}) => {
const [loading ,setLoging] = useState(true)
const googleProvider = new GoogleAuthProvider()

    const [user,setUser]= useState(null)

    const creatUser = (email,password)=>{
        setLoging(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoging(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signinGoogle = () =>{
        setLoging(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = ()=>{
        setLoging(true)
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
            setLoging(false)
        }
        })
        return ()=>{
            unSubscribe()
          }
},[])








    const userInfo ={
        loading,
        user,
       creatUser,
       signInUser,
       signinGoogle,
       signOutUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>  
    );
};

export default AuthProvider;