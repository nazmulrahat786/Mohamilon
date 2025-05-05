import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const location = useLocation()

    const {user,loading} = use(AuthContext)
    if(!user){
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    if(loading){
       return  <span className="loading loading-spinner loading-xl"></span>
    }

    return children;

};

export default PrivetRoute;