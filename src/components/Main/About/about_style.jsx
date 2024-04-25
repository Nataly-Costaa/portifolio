import styled from "styled-components";
import { Center } from "../../Header/header_style";

export const About = styled.section `
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 95vh;

    .img-nataly {
        /* border: solid #d066f6; */
        box-shadow: rgba(226, 4, 250, 0.885) 0px 30px 90px;
    }

    .img-nataly img {
        width: 20vw;
    }

    
    p {
        color: #fff;
        font-size: 1.2rem;
    }
    
    .container1 {
        ${Center}
        flex-direction: column;
        width: 40vw;
        height: 90vh;
    }

    .about-me {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 85vh;
    }
    
    .about-me h1 {
        font-size: 3rem;
        color: #fff;
    }

    .about-me h1 span {
        background: -webkit-linear-gradient( #d066f6, #c7009c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #read_button {
        width: 9vw;
        height: 7vh;
        border-radius: 8px;
        border: none;
        background-color: #B91294;
        font-size: 1rem;
        color: #fff;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        cursor: pointer;
        transition: scale 0.2s ease;
    }

    #read_button:hover {
        background-color: #fff;
        color: #c7009c;
        scale: 1.05;   
    }

    #read_button:active {
        scale: 0.95;
    }

    @media (max-width: 480px) {
        height: 149vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .img-nataly img {
            width: 80vw;
        }

        .container1 {
            height: 85vh;
            width: 43vh;
        }

        #read_button {
            width: 24vw;
            height: 5vh;
        }
    }
`