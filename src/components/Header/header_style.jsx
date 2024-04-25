import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family:"Josefin Sans", sans-serif;
 }
`;

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 19vh;
    background: linear-gradient(-45deg,#390133 , #3a0636, #2e0123 ,#320129); 
    box-shadow: 0px 12px 10px 0px rgba(0,0,0,0.25);

    figure {
        ${Center}
        width: 18vw;
    }

    figure img {
        width: 8vw;
        height: 18vh;
        border-radius: 50%;
    }

    @media (max-width: 480px) {
        height: 17vh;

        figure {
            width: 30vw;
        }

        figure img {
            width: 22vw;
            height: 11vh;
        }
    } 

    @media (min-width: 480px) and (max-width: 768px) {
        height: 15vh;

        figure {
            width: 35vw;
        }

        figure img {
            width: 16vw;
            height: 11vh;
        }
    }  
`

export const NavBar = styled.nav`
    width: 50vw;

    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
    }

    ul li a {
        text-decoration: none;
        color: #ffffff;
        font-size: 1.1rem;
    } 

    .nav_toggle {
        display: none;
    }

    @media (max-width: 768px) {
        width: 17vw;

        ul {
            position: absolute;
            top: 123px;
            left: 0;
            background: #281d3055;
            backdrop-filter: blur(50px); /*<-*/
            display: flex;
            flex-direction: column;
            width: 100%;
            height: -webkit-fill-available;
            transform: translateX(-100%);
            transition: 0.3s ease all;
        }

        ul.open {
            transform: translateX(0) !important;
            z-index: 2;
        }

        .nav_toggle {
            display: flex !important;
            flex-direction: column;
            margin: 15px;
        }

        .nav_toggle span {
            width: 30px;
            height: 4px;
            background: #fff;
            margin-bottom: 5px;
            border-radius: 2px;
            transform-origin: 5px 0px;
            transition: all 0.2s linear;
        }

        .nav_toggle.open > span {
            transform: rotate(45deg) translate(0px, 0px);
        }

        .nav_toggle.open > span:nth-child(2) {
            display: none;
        }

        .nav_toggle.open > span:nth-child(3) {
            transform: rotate(-45deg) translate(-5.5px, 2px);
        }
    }
`  