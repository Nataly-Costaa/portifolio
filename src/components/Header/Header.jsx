import * as S from "./header_style";
import logo from "../../assets/logo_nataly.png"
import {useState} from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header>
      <figure>
          <img src={logo} alt="Logo Nataly Costa" />
      </figure>  

      <S.NavBar>
          <ul className={isOpen && "open"}>
            <li><a href="#about">About</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </S.NavBar>
    </S.Header>
  )
}
