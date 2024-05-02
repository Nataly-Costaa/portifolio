import styled from "styled-components";
import { Center } from "../Header/header_style";

export const Main = styled.main` 
    background: linear-gradient(-45deg,#2d132a , #281d30, #2e0123 ,#320129);

    .main-page {
        background-size: 400% 400%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .desktop_banner {
        display: block;
    }

    .mobile_banner {
        display: none;
    }

    .text h1, h2 {
        color: #fff;
        font-weight: 500;
    }

    .text h2 span {
        background: -webkit-linear-gradient( #d066f6, #c7009c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
    }

    .text h2 span::before {
        content: "front-end developer";
        color: #fff;
        animation: words 20s infinite;
    }

    .text h2 span::after {
        content: "";
        position: absolute;
        width: calc(100% + 8px);
        height: 100%;
        background-color: #320129;
        border-left: 2px solid #fff;
        right: -3px;
        animation: cursor 2s infinite, typing 30s steps(30) infinite;
    }

    @keyframes cursor {
        to {
            border-left: 2px solid transparent;
        }
    }

    @keyframes words {
        0%, 100% {
            content: "front-end developer";
        }
        
    }

    @keyframes typing {
        10%,15%,30%,35%,50%,55%,70%,75%,90%,95% {
            width: 0;
        }
        5%,20%,25%,40%,45%,60%,65%,80%,85% {
            width: calc(100% + 8px);
        }
    }

    .text h1 {
        font-size: 3.3rem;
        width: 30vw;
    }

    .text h2 {
        font-size: 2rem;
        width: 30vw;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 36vw;
        height: 18vw;
        padding: 0 0 0 5rem;
        z-index: 1;
    }

    .main-page button {
        width: 8.4vw;
        height: 7vh;
        font-weight: 700;
        font-size: 0.9rem;
        color: #a40b83;
        border-radius: 9px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        cursor: pointer;
        transition: 0.3s ease;
    }

    #btn1 {
        display: block;
    }

    #btn2 {
        display: none;
    }

    .main-page button:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .main-page button:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    .main-page button:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }

    .desktop_banner img {
        width: 50vw;
        height: 100vh;
    }

    .networks {
        display: flex;
        justify-content: space-around;
        width: 7vw;
    }

    .networks a {
        text-decoration: none;
        transition: 0.3s ease;
        border-radius: 50%;
    }

    .networks a:hover {
        color: #fff;
        transform: scale(1.2);
        background-color: transparent;
        box-shadow: 0 0 25px #d066f6;
    }

    .networks .fa-brands {
        border: solid #d066f6;
        border-radius: 50%;
        ${Center};
        width: 2.3vw;
        height: 5vh;
        color: #d066f6;
    }

    @media (max-width: 480px) {
        height: 820vh;
        flex-direction: column;

        .main-page {
            flex-direction: inherit;
            height: 50vh;
        }

        .desktop_banner {
            display: none;
        }

        .mobile_banner {
            display: block;
            width: 100vw;
            
        }
        .mobile_banner img {
            width: 100vw;
        }

        .text {
            position: absolute;
            top: 4rem;
            left: 1rem;
            width: 60vw;
            height: 20vh;
            padding: 0 0 0 0.8rem;
        }

        .text h1{
            font-size: 1.5rem;
            width: 42vw;
        }

        .text h2 {
            width: 58vw;
            font-size: 1.2rem;
        }

        .text h2 span {
            background: -webkit-linear-gradient( #f2f5f5, #eff1f1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 900;
        }

        .text h2 span::after {
            background: transparent;
            animation: 0;
            border-left: 0;
        }

        #btn1 {
            display: none;
        }

        #btn2 {
            display: block;
            width: 26vw;
            height: 6vh;
        }

        .networks {
            width: 17vw;
        }

        .networks .fa-brands {
            width: 7.6vw;
            height: 4vh;
            border: solid #f9fafa;
            color: #f6f9f9;
        }

       
    }

    
    
`