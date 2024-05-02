import * as S from "./projects_style"

export default function Card({ img, text, title, techs1, techs2, techs3, techs4 , link}) {
    return (
        <S.Card>
                <figure className="cards">
                    <img src={img} alt="Projeto" />

                    <h2 id="title-project">{title}</h2>
                        
                    <div className="infos">
                        <div className="techs-projects">
                            <div className="tech1">
                            <p>{techs1}</p>
                            </div>
                            <div className="tech2">
                            <p>{techs2}</p>
                            </div>
                            <div className="tech3">
                            <p>{techs3}</p>
                            </div>
                            <div className="tech4">
                            <p>{techs4}</p>
                            </div>
                        </div>

                        <a href={link} id="link-github" target="blanck"><i  className="fa-brands fa-github"></i></a>
                    </div>

                    <figcaption>{text}</figcaption>
                </figure>
            </S.Card>
    )
}