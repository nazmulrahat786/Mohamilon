import React from 'react';
import { Link } from 'react-router';

const Login = () => {


    return (

      <div className="card bg-base-100 my-52 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl font-bold">Login now!</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form >
        <p>New to this site ? Please <Link className='text-blue-500' to='/register'>Register</Link></p>
      </div>
    </div>
 
    );
};

export default Login;