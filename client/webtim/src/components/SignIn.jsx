import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


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
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <br />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button
          className="login__btn"
          // onClick={() => signInWithEmailAndPassword(auth, email, password)}
          onClick={signIn}
        >
          Login
        </button>
        <br />
        <div>
          Don't have an account? <Link to="/SignUp">Sign Up</Link> now.
        </div>
      </div>
    </div>
  );
};

export default SignIn