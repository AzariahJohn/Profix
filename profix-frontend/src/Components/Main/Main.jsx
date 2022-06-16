import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="main__container">
        <div className="ctxt__section">
            <div className="ctxt__text">
              <h1 className="ctxt">We Custom Build Your Dream PC</h1>
            </div>
            <div className="ctxt__buttons">
              <Link to="/custom-pc"><button className="cbutton" id="a">Customize</button></Link>
              <Link to="/prebuilt"><button className="cbutton" >Order Now</button></Link>   
            </div>
        </div>
        {/* <div className="cards__section">
          <div className="card">
            <h3 className='card__title'>Service</h3>
            <p className="card__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium veniam cupiditate delectus quo maiores magni officia, 
              eum ex ipsa esse harum iusto aliquid veritatis expedita quas dolorum 
              amet deleniti error!
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">Service</h3>
            <p className="card__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium veniam cupiditate delectus quo maiores magni officia, 
              eum ex ipsa esse harum iusto aliquid veritatis expedita quas dolorum 
              amet deleniti error!
            </p>
          </div>
        </div> */}
    </div>
  )
}

export default Main