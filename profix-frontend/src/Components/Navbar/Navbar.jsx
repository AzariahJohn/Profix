import React, { useContext } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../AuthManager/AuthContext'

const Navbar = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className="nav__container">
      
      <div className="right__container">
        <div className="logo__container">
          <h2 className="logo">PROFIX</h2>
        </div>
        <div className="navlinks__container">
          <ul className="navlinks__ul">
            {currentUser && 
              <Link to="/forum"><li className="navlinks">Forum</li></Link>
            }
            {currentUser && <Link to="/chat"><li className="navlinks">Chat</li></Link>}
            <Link to="/"><li className="navlinks">Home</li></Link>            
          </ul>
        </div>
      </div>

      
      <div className="left__container">
        <div className="loglink__container">
          <ul className="navlinks__ul">
            {!currentUser && <Link to="/signup"><li className="navlinks">Sign up</li></Link>}
            {!currentUser && <Link to="/login"><li className="navlinks">Login</li></Link>}
            {currentUser && <Link to='/account'><li className="navlinks">Account</li></Link>}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar