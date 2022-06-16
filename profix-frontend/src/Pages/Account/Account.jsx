import React, { useContext } from 'react'
import './Account.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthManager/AuthContext'

const Account = () => {

  const { currentUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/')
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <div className="account__container">
      <div className="account__card">
        {/* <div className="account__title">
          <h1>Account</h1>  
        </div>  */}
        <div className="info__container">
          <h2>{currentUser && currentUser.displayName}</h2>
          <h2 className="email__small">{currentUser && currentUser.email}</h2>
        </div>
        <div className="logout__btn">
          <button className="lbtn" onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
      <div className="myposts__container">
          All the posts here.
        </div>
    </div>
  )
}

export default Account