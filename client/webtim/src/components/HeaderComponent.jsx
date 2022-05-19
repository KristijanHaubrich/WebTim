import React, { Component, useEffect, useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import classes from "../styles/Header.module.scss";


const HeaderComponent = () => {


    const navigate = useNavigate();
    // const navigate = useNavigate();
    // const [user, loading, error] = useAuthState(auth);


    // useEffect(() => {
    //   if(!user){
    //       navigate('/SignIn')
    //   }
    // }, [user, loading])

    const [menuOpen, setMenuOpen] = useState(false);

    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen]);


    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.header__content}>

                    <a className={classes.header__content__logo} href="https://github.com/KristijanHaubrich/WebTim">zapisnik</a>

                    <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                        <ul>
                            <li>
                                <a href='/products' onClick={menuToggleHandler}>Products List</a>
                            </li>
                            <li>
                                <a href='/add' onClick={menuToggleHandler}>Add Product</a>
                            </li>
                            <li>
                                <a href='/products' onClick={menuToggleHandler}>Shops</a>
                            </li>
                            <li>
                                <a href='/SignIn' onClick={() => { menuToggleHandler(); logout(); }}>Sign out</a>
                            </li>
                        </ul>


                    </nav>

                    <div className={classes.header__content__toggle}>
                        {!menuOpen ? (<BiMenuAltRight onClick={menuToggleHandler} />)
                            : (<AiOutlineClose onClick={menuToggleHandler} />)}
                    </div>

                </div>
            </header>
        </div>
    )
}

export default HeaderComponent
