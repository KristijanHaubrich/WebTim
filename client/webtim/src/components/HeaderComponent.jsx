import React, { Component, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";



const HeaderComponent = () => {

    // const navigate = useNavigate();
    // const [user, loading, error] = useAuthState(auth);


    // useEffect(() => {
    //   if(!user){
    //       navigate('/SignIn')
    //   }
    // }, [user, loading])
    


    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><h1 href="https://github.com/KristijanHaubrich/WebTim" className="navbar-brand">WebTim</h1></div>
                    <div><Link to="/SignIn" className='btn btn-info' onClick={logout}>Sign out</Link></div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
