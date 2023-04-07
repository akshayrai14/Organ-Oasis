import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import db, { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
// import db from '../firebase'
const Signup = () => {
  const history= useHistory();
  const [state,dispatch]=useStateValue();
  const signIn=()=>{
        // auth.signInWithPopup(provider)
        // .then(result=>{
        //     console.log(result);
        //     dispatch({
        //       type:actionTypes.SET_USER,
        //       user: result.user,
        //     })
        // }).catch((error)=>{
        //     alert(error.message);
        // })
        var email =document.getElementById('email').value;
        var password =document.getElementById('password').value;
        db.collection('Accounts').add({
          email: email,
          password: password,
        })
        alert('Successfly signed in > redirecting you to login page......');
        history.push('/login');
    }

    function login()
    {
      history.push('/login');
    }
  return (
    <div className="login-page">
    <nav className="navbar">
      <div className="nav-container" style={{color:'white'}}>
          Organ-Oasis
      </div>
    </nav>
          <div class="login-container">
            <div class="registration form">
              <div className="login-header">SIGN UP</div>
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
                    SIGN UP
                  </Button>
                </div>
                <p> Or </p>
                <div className="button-block">
                    <Button className="button" variant="contained" onClick={login}>
                      LOG IN
                    </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Signup