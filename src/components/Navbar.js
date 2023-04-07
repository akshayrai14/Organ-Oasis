import { DirectionsBikeOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer'
import "./Navbar.css";
function Navbar() {
    const [click, setClick] = useState(false);
    const [{user},dispatch]=useStateValue();
    const handleClick = () => {setClick(!click)

    };
    // const []
    var main = '/'+user+'/main';
  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
      {user==null?"Organ-Oasis":(<NavLink to={main} style={{color:'white'}}>
          Organ-Oasis
      </NavLink>)}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
              onClick={()=>{
                dispatch({
                  type:actionTypes.SET_USER,
                  user: null,
                })
                handleClick();
              
              }}
            >
              {user?"Logout":"Login"}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Navbar