import './CSS/Cards.css';
import React from "react";
import My_page from "./my_page";
import first from './images/1.jpg';
import second from './images/2.png';
import third from './images/3.jpg';
import fourth from './images/5.jpg';
import fifth from './images/6.jpg';
import sixth from './images/7.jpg';
import seventh from './images/8.jpg';
import eighth from './images/9.jpg';
// class component
class Cards extends React.Component {
    render() {
        return (
            // Здесь с помощью пропсы мы аргументов отправим в my_page через переменную.
            // Например image, name, message это типо переменные, и мы им задаем название, затем отправляем.
            <div className="cards">
                <My_page image={first} name="Lenovo Legion" message="V14 Athlon Gold 3150U / 8ГБ / 128SSD / 14 / Win10 / (82C6S03900)" price="250 000KZT"/>
                <My_page image={second} name="Neo 15U Gold" message="Gaming 3 i5 11300H / 8ГБ / 512SSD / RTX3050 4ГБ / 15.6 / DOS / (82K1005ARK)" price="320 000KZT"/>
                <My_page image={third} name="Acer Nitro A5" message="15U i5 5257U / 8ГБ / 256SSD / 15.6 / Win10 / (WH15U-I5)" price="520 000KZT"/>
                <My_page image={fourth} name="HP Pavilion" message="L3 i5 1135G7 / 8ГБ / 1000HDD / 15.6 / Win10 / (82HL002HRK)" price="460 000KZT"/>
                <My_page image={fifth} name="Huawei CoreGold" message="D15 i5 10210U / 8ГБ / 512SSD / 15.6 / Win10 / (BohrB-WAH9FQ)" price="350 000KZT"/>
                <My_page image={sixth} name="Asus X40912" message="6805 / 8ГБ / 256SSD / MX130 2ГБ / 15.6 / DOS / (X515JF-EJ257)" price="420 000KZT"/>
                <My_page image={seventh} name="HP Golder Mh9" message="1115G4 / 8ГБ / 1000HDD / 15.6 / Win10 / (82HL002FRK)" price="650 000KZT"/>
                <My_page image={eighth} name="HP Pavilion" message="4115 / 8ГБ / 128SSD / 15.6 / Win10 / (NEO 151G)" price="540 000KZT"/>
            </div>
        );
    }
}

export default Cards;