import nataly from "../../../assets/nataly.png";
import { useState } from "react";

import * as S from "./about_style";

const hideText = {
    WebkitLineClamp: 8,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

export default function About() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <S.About id="about">
        <figure className="img-nataly">
            <img src={nataly} alt="Foto Nataly" />
        </figure>


        <div className="container1">
            <div className="about-me">
                <h1>About <span id="span-about">Me</span></h1>

                <p style={isOpen ? null : hideText}>Atualmente faço 5º período de Ciência da Computação, sou uma pessoa que está sempre em busca de aprender mais, explorar opções e sempre dou o meu melhor naquilo que me proponho a fazer. Desde de que iniciei nessa jornada no universo vasto da tecnologia, venho me apaixonando cada vez mais por esse mundo, e essa paixão me faz a cada dia uma pessoa mais focada de determinada para alcançar meus objetivos e metas, de poder fazer aquilo que gosto, trabalhar como desenvolvedora front-end e futuramente, e já estou estudando para que isso aconteça, como uma desenvolvedora fullstack. Sei que meus objetivos pode mudar daqui alguns anos, porém sempre correrei atrás, buscarei e estudarei para poder alcançar cada meta e objetivos.</p>
                <button id="read_button" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Read less' : 'Read more'}</button>
            </div>
        </div>
    </S.About>
  )
}
