import React, {useState, useContext} from 'react'
import './Login.css'
import { AuthContext } from '../../AuthManager/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signIn, gAuth } = useContext(AuthContext);
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  const closeBox = () => {
    setError('')
    setSuccess('')
    setStatus(status)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signIn(email, password);
      setSuccess("Logged in Successfully");
      navigate('/')
    }catch(er){
      setError(er.message);
      console.log(error);
    }
  }

  return (
    <div className="login__container">
      <div className="login__card">
        <h1 className="card__title">Login</h1>
        <div className="input__container">
          <input className="inp" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <input className="inp" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="btn__container">
          <button className="bg__buttons" id="lgin" onClick={handleSubmit}>Login</button>
        </div>
        <div className="division">
          <div className="line__right"></div>
          <p>OR</p>
          <div className="line__right"></div>
        </div>
        <div className="gsign__container">
          <button className="bg__buttons" onClick={googleOAuth}>Login with google</button>
        </div>
      </div>
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

export default Login