import styled from "styled-components";
import { Center } from "../../Header/header_style";

export const Projects = styled.section`
    height: 190vh;

    .title-project {
        width: 24vw;
        height: 13vh;
        color: #fff;
        text-align: center;
        font-size: 2.3rem;
    }

    .cards-projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    @media (max-width: 480px) {
        height: 450vh;

        .title-project {
            width: 50vw;
        }

        .cards-projects {
            ${Center}
            flex-direction: column;
        }
    }
`

export const Card = styled.div`
    width: 25.4vw;
    height: 70vh; 

    .cards {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
    }

    .cards img {
        width: 25vw;
        height: 33vh;
    }

    #title-project {
        background: -webkit-linear-gradient( #d066f6, #ffcbf4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
    }

    .infos {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .techs-projects {
        display: flex;
        justify-content: space-evenly;
        width: 19vw;
    }

    .techs-projects div p{
        color: #fff;
        font-size: 0.6rem;
    }

    .tech1 {
        width: 3vw;
        height: 3vh;
        background-color: #EC6464;
        ${Center}
        border-radius: 8px;
    }
    
    .tech2 {
        width: 3vw;
        height: 3vh;
        background-color: #2B7BF4;
        ${Center}
        border-radius: 8px;
    }

    .tech3 {
        width: 4vw;
        height: 3vh;
        background-color: #E2CE1E;
        ${Center}
        border-radius: 8px;
    }

    .tech4 {
        width: 3vw;
        height: 3vh;
        background-color: #00C2FF;
        ${Center}
        border-radius: 8px;
    }

    #link-github .fa-github {
        width: 3vw;
        color: #fff;
    }

    .cards figcaption {
        color: #fff;
    }

    @media (max-width: 480px) {
        width: 85vw;

        .cards img {
            width: 84vw;
            height: 27vh;
        }

        .techs-projects {
            width: 50vw;
        }

        .tech1 {
            width: 10vw;
            border-radius: 9px;
        }
    
        .tech2 {
            width: 9vw;
            border-radius: 9px;
        }

        .tech3 {
            width: 13vw;
            border-radius: 9px;
        }

        .tech4 {
            width: 10vw;
            border-radius: 9px;
        }

        #link-github .fa-github {
            width: 12vw;
        }
    }
`