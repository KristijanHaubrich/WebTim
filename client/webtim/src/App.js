import './App.css';
import ProductListComponent from './components/ProductListComponent';
import HeaderComponent from './components/HeaderComponent';
import ShopsComponent from './components/ShopsComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProductComponent from './components/AddProductComponent';
import ErrorPageComponent from './components/ErrorPageComponent';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import React, { Component, useEffect } from 'react'
import { auth, db, logout } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  var [user, loading, error] = useAuthState(auth);

  if(user){
    return (
      <div>
        <Router>
            <HeaderComponent />
            <div className="container">
              <Routes>
                <Route exact path="/"  element={<ProductListComponent />}> </Route>
                <Route path="/products" element={<ProductListComponent />}> </Route>
                <Route path="/add" element={<AddProductComponent />}> </Route>
                <Route path="/signin" element={<ProductListComponent />}> </Route>
                <Route path='/signup' element={<ProductListComponent />}> </Route>
                <Route path='/shops' element={<ShopsComponent />}> </Route>
                <Route path="*" element={<ErrorPageComponent />} />
              </Routes>
            </div>
            <FooterComponent />
        </Router>
      </div>
    );
  }
  else{
    return(
      <div>
        <Router>
            <div className='container'>
              <Routes>
                <Route exact path="/"  element={<SignIn />}> </Route>
                <Route path="/signin" element={<SignIn />}> </Route>
                <Route path='/signup' element={<SignUp />}> </Route>
                <Route path="*" element={<ErrorPageComponent />} />
              </Routes>
            </div>
            <FooterComponent />
        </Router>
      </div>
    )
  }
  
}

export default App;
