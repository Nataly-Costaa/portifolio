import styled from "styled-components";
import { Center } from "../../Header/header_style";

export const Technologies = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80vh;
    .title-tech {
        color: #fff;
        text-align: center;
        font-size: 2.3rem;
        width: 30vw;
    }

    .tech {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .tech figure {
        ${Center}
        width: 13vh;
    }

    .tech figure img {
        width: 4.5vw;
        height: 10vh;
    }


    @media (max-width: 480px) {

        .title-tech {
            width: 73vw;
        }

        .tech {
            flex-wrap: wrap;
            height: 30vh;
        }

        .tech figure img {
            width: 21vw;
        }
    }
`