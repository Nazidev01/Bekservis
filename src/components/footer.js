import React from 'react'
import bg from "../img/Autograph Edition Appliances _ ZLINE Kitchen and Bath 1.png"
import img1 from "../img/Onderhoud aan huis _ Service _ Siemens Huishoudtoestellen België 1.png"
import img3 from "../img/Organizador de prateleira de cozinha em aço inoxidável, rack de secagem de pratos, utensílios de pia, tigela, pratos de drenagem, prateleira de cozinha, armazenamento_Racks e suportes_   - AliExpress 1.png";
import img2 from  "../img/2-surot.png"

const Footer = () => {

  return (
    <section id="footer">
      {/*<img src={bg} alt="" />*/}
      <div className="container">
        <div className="footer">
          <div className='image'>
            <img  className='img1' src={img1} alt=""/>
            <img  className='img3' src={img2} alt=""/>
            <img className='img2' src={img3} alt=""/>
          </div>
         <div className="footer-text">
           <h1>Также ремонт <br/>
             посудамоечных и <br/>
             сушилных машин.</h1>
           <button className='btn1'>Замена деталей.</button>
           <button className='btn2'>Чистка и обслуживание техники.</button>
           <button className='btn3'>Диагностика и ремонт электронных плат.</button>
           <button className='btn4'>Устранение протечек и др виды ремонтных работ.</button>
         </div>
         
        </div>
      </div>
      
    </section>
  );
}

export default Footer