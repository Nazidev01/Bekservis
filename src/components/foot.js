import React from 'react';
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { HiOutlineLocationMarker} from 'react-icons/hi';



const Foot = () => {
    return (
      <section>
              <div id='karta'>
                <div className='zemla'>
                         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4422680689577!2d74.46792747613542!3d42.86350847115061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ecf6b8160ae89%3A0xb6bbf37b4c86772b!2zMTYg0KLRg9GO0Lot0JbQsNGALCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1695390594099!5m2!1sru!2skg"
  width="550"
  height="350"
  style={{ border: "0px", color: "" }}
  allowfullscreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" className="visit--contact__map"
></iframe>
<div className='opis'>
  <h1>Наш вдрес:</h1>
 <h5><HiOutlineLocationMarker className='icona1'/>Туюк Жар 16</h5>
 <h2>Также вы можете найти нас по адресу:</h2>
 <h5><MdOutlineAddLocationAlt className='icona2'/>Улица Ашырматова Рыскулбека, 31 </h5>
          <a href="https://wa.me/996500475147"><BsWhatsapp className='icona3'/>
                            </a>
                            <a href="https://instagram.com/bek_servis_bishkek001?igshid=YmMyMTA2M2Y="><AiFillInstagram className='icona4' style={{
                                margin:' 0 25px'
                            }}/></a>
                            <a href="tel:+996509-01-03-91">                            <BsFillTelephoneFill className=' icona5'/>
                            </a>

</div>


                </div>
  

        </div>

        <div id='foot'>
           
                <div className="container">
                    <div className="foot">
                        <h1>BEK_SERVIS_BISKEK001</h1>
                        <div className="foot-icon">
                            <a href="https://wa.me/996500475147"><BsWhatsapp/>
                            </a>
                            <a href="https://instagram.com/bek_servis_bishkek001?igshid=YmMyMTA2M2Y="><AiFillInstagram style={{
                                margin:' 0 25px'
                            }}/></a>
                            <a href="tel:+996509-01-03-91">                            <BsFillTelephoneFill/>
                            </a>
                        </div>
                    </div>
            </div>

        </div>
              </section>

    );
};

export default Foot;