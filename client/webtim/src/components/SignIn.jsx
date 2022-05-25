import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import classes from "../styles/Form.module.scss";
import banner from './../icon.png';

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    // if (loading) {
    //   // maybe trigger a loading screen
    //   return;
    // }
    if (user) navigate("/products");
  }, [user, loading]);


  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password);
    if(user){
      navigate("/products");
    }
  };


  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <div><img src={banner} alt = "banner" className={classes.logo} /></div>
        <div className={classes.form__banner}>
          LOGIN
        </div>
        <br />
        <input
          type="text"
          required = "required"
          id='email'
          className={classes.form__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder = "Email"
        />
        
        <br />
        <br />  
     
        <input
          type="password"
          className={classes.form__input}
          required = "required"
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder = "Password"
        /> 
        
       
        <br />
        <br />
        
        <button
          // onClick={() => signInWithEmailAndPassword(auth, email, password)}
          onClick={signIn}
        >
          Login
        </button>

        <br />
        <br />
        <div className={classes.form__acc}>
          Don't have an account? <Link to="/SignUp">Sign Up</Link> now.
        </div>
      </div>
    </div>
  );
};

export default SignIn