import React from 'react'
import hero from "../img/Appliance Repair in Edmonton 1.png";
import auto1 from "../img/Beko WYA 81643 LE Waschmaschine 1.png";
import auto2 from "../img/Lava e Seca Frontal 11Kg Automática 110 Volts, Inox, Samsung 1.png";
import auto3 from "../img/WA74SY2B - Simplicity Black Washing Machine 1.png";
import auto4 from "../img/Washers & Dryers - Appliancist 1.png";
import auto5 from "../img/Wäsche trocknen_ 24 Praxistipps 1.png";
import man1 from "../img/Как пользоваться и ухаживать за стиральной машиной-автомат 1.png";
import man2 from "../img/Plumbers in Edgware 1.png";
import man3 from "../img/Водопроводчик, делающий телефонный жест _ Бесплатно Фото 1.png";
import krug from "../img/Скупка холодильников б_у в Краснодаре - Деньги сразу 1.png";
import marka1 from "../img/prod4 1.png";
import marka2 from "../img/prod3 1.png";
import marka3 from "../img/prod2 1.png";
import marka4 from "../img/prod1 1.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";






const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-title">
            <h1>
              Ремонт стиральных <br />
              машин
            </h1>
            <p>
              🔧 Профессиональный ремонт <br />
              стиральных машин <br />
              от лучших мастеров в
              <br />
              городе!
            </p>
            <button>BEK_SERVIS_BISKEK001</button>
          </div>
          <div className="hero-img">
            <img src={hero} alt="" />
          </div>
        </div>
        <div className="hero-techno">
          <div className="hero-tech">
            <img src={auto2} alt="" />
            <h4>BEKO</h4>
          </div>
          <div className="hero-tech">
            <img src={auto4} alt="" />
            <h4>MIDEA</h4>
          </div>
          <div className="hero-tech">
            <img src={auto1} alt="" />
            <h4>LG</h4>
          </div>
          <div className="hero-tech">
            <img src={auto3} alt="" />
            <h4>SAMSUNG</h4>
          </div>
          <div className="hero-tech">
            <img src={auto5} alt="" />
            <h4>INDESIT</h4>
          </div>
        </div>
        <div className="construction">
          <img src={man1} alt="" />
          <img src={man2} alt="" />
          <div className="const-list">
            <h1>
              🧰 Мы предоставляем <br />
              полный спектр услуг:
            </h1>
            <ul>
              <li>
                Диагностика и <br />
                выявление неисправностей
              </li>
              <li>Замена деталей высшего качества</li>
              <li>
                Профилактическое обслуживание для <br />
                продления срока службы
              </li>
              <li>Быстрый и надежный ремонт.</li>
            </ul>
          </div>
        </div>
        <div className="details">
          <img src={man3} alt="" />
        </div>
        <div className="buu">
          <h1>СКУПКА СТИРАЛЬНЫХ МАШИН</h1>
          <h1>ПРОДАЖА Б/У МАШИН</h1>
        </div>
        <div className="info">
          <p>
            Скупка стиральных машин в <br />
            Бишкеке. Если <br />
            ваша стиральная машина
            <br />
            поломалась или же <br />
            вы просто хотите обновить <br />
            технику, то мы вам поможем.
            <br />
            Выкупим вашу <br />
            машинку по <br />
            выгодной цене в <br />
            кратчайшие сроки.
          </p>
          <img src={krug} alt="" />
          <p>
            В продаже Б/У стиральные <br />
            машинки автомат, фирмы <br />
            LG,Samsung и т.д. Все <br />
            машинки в отличном <br />
            техническом состоянии , <br />
            некоторые не отличаются от <br />
            новых. На всемашинки <br />
            выписываем гарантию. <br />И меется доставка <br />и подключение +
            сервисное <br />
            обслуживание.
          </p>
        </div>
        <div className="marka">
          <img src={marka1} alt="" />
          <img src={marka2} alt="" /> <img src={marka3} alt="" />
          <img src={marka4} alt="" />
        </div>
        <div className="media">
          <button className="what">
            <h3>
              <AiOutlineWhatsApp />
            </h3>
            Whatsapp
          </button>
          <button className="inst">
            <h3>
              <AiOutlineInstagram />
            </h3>
            Instagram
          </button>
          <button className="tik">
            <h3>
              <BiLogoTiktok />
            </h3>
            Tiktok
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero