import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'
import Navbar from './Navbar'
const Home = () => { 
    const history = useHistory();
    function login()
    {
        history.push('/login');
        document.getElementsByClassName('page')[0].style.zIndex=-1;
        console.log(document.getElementsByClassName('page')[0].style.zIndex);
    }
  return (
    <>
    <Navbar></Navbar>
    <div id="page1"></div>

    </>
    )
}

export default Home