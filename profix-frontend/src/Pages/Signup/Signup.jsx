import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthManager/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  const { createUser, gAuth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await createUser(email, password);
      console.log("created successfully");
      setSuccess("Account Created Successfully");
      navigate('/')
    }catch(er){
      setError(er.message);
      console.log(er.message);
    }
  }

  const googleOAuth = async(e) => {
    e.preventDefault();
    try{
      await gAuth();
      setSuccess("Successfully Signed up");
      navigate('/')
    } catch(er) {
      setError(er.message);
    }
  }

  const closeBox = () => {
    setError('')
    setSuccess('')
    setStatus(status)
  }

  return (
    <div className="login__container">
      <form className="login__card">
        <h1 className="card__title">Signup</h1>
        <div className="input__container">
          <input className="inp" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
          <input className="inp" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
        </div>
        <div className="btn__container">
          <button className="bg__buttons" id="lgin" onClick={handleSubmit}>Signup</button>
        </div>
        <div className="division">
          <div className="line__right"></div>
          <p>OR</p>
          <div className="line__right"></div>
        </div>
        <div className="gsign__container">
          <button className="bg__buttons" onClick={googleOAuth}>Signup with google</button>
        </div>
      </form>
      {error && 
        <div className={status ? "signup__error" : "inactive"}>
          <div className="error__message">{error}</div>
          <div className="btn__div"><button className="close__btn" onClick={closeBox}>x</button></div>
        </div>
      }
      {success && 
        <div className={status ? "signup__success" : "inactive"}>
          <div className="success__message">{success}</div>
          <div className="btn__div"><button className="close__btn" onClick={closeBox}>x</button></div>
        </div>
      }
    </div>
  )
}

export default Signup