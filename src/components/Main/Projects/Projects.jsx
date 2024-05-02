import site from "../../../assets/site.png"

import * as S from "./projects_style";
import Card from "./Card";

export default function Projects() {
  return (
    <S.Projects id="projects">
        <h1 className="title-project">Projects</h1>

        <div className="cards-projects">
            <Card img={site} title={"Mc Donald's"} techs1={"HTML"} techs2={"CSS"} techs3={"JavaScript"} techs4={"React"} link={"https://github.com/Nataly-Costaa/mcdonalds_vnw"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at. Ipsa distinctio adipisci nisi doloribus temporibus architecto mollitia "}/>

            <Card img={site} title={"Mc Donald's"} techs1={"HTML"} techs2={"CSS"} techs3={"JavaScript"} techs4={"React"} link={"https://github.com/Nataly-Costaa/mcdonalds_vnw"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at. Ipsa distinctio adipisci nisi doloribus temporibus architecto mollitia "}/>

            <Card img={site} title={"Mc Donald's"} techs1={"HTML"} techs2={"CSS"} techs3={"JavaScript"} techs4={"React"} link={"https://github.com/Nataly-Costaa/mcdonalds_vnw"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at. Ipsa distinctio adipisci nisi doloribus temporibus architecto mollitia "}/>

            <Card img={site} title={"Mc Donald's"} techs1={"HTML"} techs2={"CSS"} techs3={"JavaScript"} techs4={"React"} link={"https://github.com/Nataly-Costaa/mcdonalds_vnw"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at. Ipsa distinctio adipisci nisi doloribus temporibus architecto mollitia "}/>

            <Card img={site} title={"Mc Donald's"} techs1={"HTML"} techs2={"CSS"} techs3={"JavaScript"} techs4={"React"} link={"https://github.com/Nataly-Costaa/mcdonalds_vnw"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at. Ipsa distinctio adipisci nisi doloribus temporibus architecto mollitia "}/>
            
            <Card img={site} title={"Mc Donald's"} techs1={"HTML"} techs2={"CSS"} techs3={"JavaScript"} techs4={"React"} link={"https://github.com/Nataly-Costaa/mcdonalds_vnw"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at. Ipsa distinctio adipisci nisi doloribus temporibus architecto mollitia "}/>
        </div>
    </S.Projects>
  )
}
