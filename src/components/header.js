import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="header">
          <h1>BEK_SERVIS_BISKEK001</h1>
          <div className="header-call">
            <div>
              <h3>
                <FiPhoneCall />
              </h3>
            </div>
            <a href="tel:+996500-47-51-47">+996500-47-51-47</a>
          </div>
        </div>
      </div>
       <div id="header-link">
      <div className='container'>
          <div className="header-link">
     
      </div>
        </div>
      </div>
      
    </section>
  );
}

export default Header