import html from "../../../assets/logo_html.webp";
import css from "../../../assets/logo_css.webp";
import js from "../../../assets/logo_js.png";
import react from "../../../assets/logo_react.png";
import node from "../../../assets/logo_node.png";

import * as S from "./technologies_style"

export default function Technologies() {
  return (
    <S.Technologies id="technologies">
        <h1 className="title-tech">Technologies</h1>

        <div className="tech">
            <figure>
                <img src={html} alt="" />
            </figure>
            <figure>
                <img src={css} alt="" />
            </figure>
            <figure>
                <img src={js} alt="" />
            </figure>
            <figure>
                <img src={react} alt="" />
            </figure>
            <figure>
                <img src={node} alt="" />
            </figure>
        </div>
    </S.Technologies>
  )
}
