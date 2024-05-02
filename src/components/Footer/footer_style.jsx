import styled from "styled-components";
import { Center } from "../Header/header_style";

export const Footer = styled.footer`
    ${Center};
    height: 30vh;
    background-color: #410637;
    color: #fff;

    @media (max-width: 480px) {
        p {
            padding: 1rem;
        }
    }
`