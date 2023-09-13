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
                {" "}
                <FiPhoneCall />
              </h3>
            </div>
            <a href="tel:+996509-01-03-91">+996509-01-03-91</a>
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