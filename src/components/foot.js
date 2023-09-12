import React from 'react';
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

const Foot = () => {
    return (
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
    );
};

export default Foot;