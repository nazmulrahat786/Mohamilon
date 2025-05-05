// import { createUserWithEmailAndPassword,} from "firebase/auth";
import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
// import { auth } from "./firebase.init";

const Register = () => {
  const {  creatUser} = use(AuthContext)
  const navigate = useNavigate()
  
  
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email, password);

    // createUserWithEmailAndPassword(auth,email,password)
    // .then(result =>{
    //     console.log(result.user);
    // })
    // .catch(error =>{
    //     console.log(error);
    // })
creatUser(email,password)
.then(result =>{
        console.log(result.user);
        navigate('/')
    })
    .catch(error =>{
        console.log(error);
    })



  };
  return (
    <div className="card bg-base-100 my-52 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" 
          name="password" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <input className="btn bg-emerald-500 text-white text-xl font-mono" type="submit" value="Register" />
        </form>
        <p>
          Already have an account ? Please{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
