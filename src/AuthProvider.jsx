import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.init';

const AuthProvider = ({children}) => {

    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }











    const userInfo ={
       creatUser,
       signInUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>  
    );
};

export default AuthProvider;