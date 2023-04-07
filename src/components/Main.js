import React from 'react'
import Navbar from './Navbar'
import HomeMain from './HomeMain'
import { Link, useParams } from 'react-router-dom';
const Main = () => {
  const {username}= useParams();
  var donate = '/'+username +'/donate';
  var accept = '/'+username +'/accept';
  var policy = '/policy';
  var available = '/available';
  var request = '/'+username+'/request';
  return (
    <div className='main'>
    <Navbar></Navbar>
    {/* <HomeMain reg={reg}></HomeMain> */}
    <div className="profile-container">
        <div class="containercard">
        <Link to={available}>
            <div className="item item-1">
              <p>AVAILABLE ORGANS</p>
            </div>
        </Link>
        <Link to={donate}>
            <div className="item item-2">
              <p>DONATE AN ORGAN</p>
            </div>
        </Link>
        <Link to={accept}>
            <div className="item item-3">
              <p>ACCEPT AN ORGAN</p>
            </div>
        </Link>
        </div>
        <div class="containercard1">
        <Link to={request}>
            <div className="item item-4">
              <p>REQUEST AN ORGAN</p>
            </div>
        </Link>
        <Link to={policy}>
            <div className="item item-5">
              <p>POLICY COMPLIANCE</p>
            </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Main