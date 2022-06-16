import React from 'react'
import './OurService.css'

const OurService = () => {
  return (
    <div className="ours__bigcntr">
      <h1>Our Service</h1>
      <div className="ours__container">
        <div className="ours__card">
          <h1 className="ours__title">Buy Prebuilt PC</h1>
          <p className="ours__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id dolorum iste, architecto doloremque odio, nobis rem 
            corrupti molestias laborum obcaecati ea eaque explicabo 
            iure delectus adipisci. Sed modi accusamus quo.
          </p>
          <button className="ours__btn">Order</button>
        </div>
        <div className="ours__card">
          <h1 className="ours__title">Buy Custom PC</h1>
          <p className="ours__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id dolorum iste, architecto doloremque odio, nobis rem 
            corrupti molestias laborum obcaecati ea eaque explicabo 
            iure delectus adipisci. Sed modi accusamus quo.
          </p>
          <button className="ours__btn">Order</button>
        </div>
        <div className="ours__card">
          <h1 className="ours__title">Chat with support</h1>
          <p className="ours__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id dolorum iste, architecto doloremque odio, nobis rem 
            corrupti molestias laborum obcaecati ea eaque explicabo 
            iure delectus adipisci. Sed modi accusamus quo.
          </p>
          <button className="ours__btn">Chat</button>
        </div>
        <div className="ours__card">
          <h1 className="ours__title">Technical Forum</h1>
          <p className="ours__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Id dolorum iste, architecto doloremque odio, nobis rem 
            corrupti molestias laborum obcaecati ea eaque explicabo 
            iure delectus adipisci. Sed modi accusamus quo.
          </p>
          <button className="ours__btn">Visit</button>
        </div>
      </div>
    </div>
  )
}

export default OurService