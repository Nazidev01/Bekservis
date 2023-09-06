import React from 'react'
import bg from "../img/Autograph Edition Appliances _ ZLINE Kitchen and Bath 1.png"
// import img1 from "../img/Onderhoud aan huis _ Service _ Siemens Huishoudtoestellen België 1.png"
// import img2 from "../img/Organizador de prateleira de cozinha em aço inoxidável, rack de secagem de pratos, utensílios de pia, tigela, pratos de drenagem, prateleira de cozinha, armazenamento_Racks e suportes_   - AliExpress 1.png";

const Footer = () => {

  return (
    <section id="footer">
      <img src={bg} alt="" />
      <div className="container">
        <div className="footer">
          <h1>Также ремонт посудамоечных и сушилных машин.</h1>
          <button>Замена деталей.</button>
          <button>Чистка и обслуживание техники.</button>
          <button>Диагностика и ремонт электронных плат.</button>
          <button>Устранение протечек и др виды ремонтных работ.</button>
        </div>
        {/* <div className='img1'>
          <img src={img1} alt=""  />
          <img src={img2} alt=""  />
        </div> */}
      </div>
    </section>
  );
}

export default Footer