import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import db, { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { useState } from 'react'
import { keys } from '@material-ui/core/styles/createBreakpoints'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Login = () => {
  const history= useHistory();
  const [state,dispatch]=useStateValue();
    const signIn=()=>{
        var email= document.getElementById("email").value;
        var password= document.getElementById("password").value;
        var count=1;
        db.collection('Accounts').onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>{
            if(email==doc.data().email && password==doc.data().password)
           {
                  history.push(`/${doc.id}/main`);
                  // console.log(doc.data().Reg)   
                  count=0; 
                  dispatch({
                    type:actionTypes.SET_USER,
                    user: doc.id,
                  })
                  alert('Logged In Re-diricting you to main page');
            }

        }) 
        if(count==1)
        {
          alert('Wrong Credentials');

        }
        
      });
        
    }
    function signup()
    {
      history.push('/signup');
    }
    // function check()
    // {
    //   var reg= document.getElementsByClassName('reg')[0].value;
    //   var pass= document.getElementsByClassName('pass')[0].value;
    //   var count=1;
    //   db.collection('Accounts').onSnapshot(snapshot=>{
    //     snapshot.docs.map(doc=>{
    //         if(reg==doc.data().Reg && pass==doc.data().Password)
    //        {
    //               history.push(`/${reg}/main`);
    //               alert('Logged In Re-diricting you to main page');
    //               // console.log(doc.data().Reg)   
    //               count=0; 
    //         }

    //     }) 
    //     if(count==1)
    //     {
    //       alert('Wrong Credentials');

    //     }
        
    //   });
      
    // }
  return (
    <div className="login-page">
    <nav className="navbar">
      <div className="nav-container" style={{color:'white'}}>
          Organ-Oasis
      </div>
    </nav>
          <div class="login-container">
            <div class="registration form">
              <div className="login-header">LOG IN </div>
              <form>
                <div className="input-spaces">
                  <input type="email" name="email" placeholder="Email" id="email"/>
                </div>
                <div className="input-spaces">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    id="password"
                  />
                </div>
                <div className="button-block">
                  <Button variant="contained" className="button" onClick={signIn}>
                    Log in
                  </Button>
                </div>
                <p> Or </p>
                <div className="button-block">
                    <Button className="button" variant="contained" onClick={signup}>
                      Sign Up
                    </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Login