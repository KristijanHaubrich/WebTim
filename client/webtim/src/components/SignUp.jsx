import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";
import classes from "../styles/Form.module.scss";
import banner from './../icon.png';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();


    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
      };
      useEffect(() => {
        if (loading) return;
        if (user) navigate("/products");
      }, [user, loading]);


  return (
    <div className={classes.login}>
     
      <div className={classes.form}>
      <div><img src={banner} alt = "banner" className={classes.logo} /></div>
      <div className={classes.form__banner}>
          REGISTER
      </div>

        <br />
        <input
          type="text"
          className={classes.form__input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <br/>
        <br/>
        <input
          type="text"
          className={classes.form__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <br/>
        <br/>
        <input
          type="password"
          className={classes.form__input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br/>
        <br/>
        <button onClick={register}>
          Register
        </button>
        <div className={classes.form__acc}>
        <br/>
          Already have an account? <Link to="/SignIn">Login</Link> now.
        </div>
      </div>
    </div>
  )
}

export default SignUp