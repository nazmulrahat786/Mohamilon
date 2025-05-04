
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './AuthContext';


const Login = () => {
const {signInUser} = use(AuthContext)

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    // signInWithEmailAndPassword(auth,email,password)
    // .then(result =>{
    //   console.log(result);
    //   setUser(result)

    // })
    // .catch(error =>{
    //   console.log(error);
    // })
    signInUser(email,password)
    .then(result =>{
      console.log(result);


    })
    .catch(error =>{
      console.log(error);
    })

  }

    return (

      <div className="card bg-base-100 my-52 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
         <input className='btn bg-blue-600 text-white text-xl font-mono' type="submit" value="Login" />
        </form >
        <p>New to this site ? Please <Link className='text-blue-500' to='/register'>Register</Link></p>
      </div>

    </div>
 
    );
};

export default Login;