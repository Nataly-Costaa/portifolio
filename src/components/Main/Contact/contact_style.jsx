import styled from "styled-components";
import { Center } from "../../Header/header_style";

export const Contact = styled.section`
    height: 100vh;

    .title-contact {
        width: 24vw;
        height: 13vh;
        color: #fff;
        text-align: center;
        font-size: 2.3rem;
    }

    .forms {
        ${Center};
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 48vw;
        height: 60vh;
    }

    form label {
        display: flex;
        flex-direction: column;
        color: #fff;
    }

    form label input {
        padding: 1rem;
        height: 10vh;
        font-size: 1rem;
    }

    form input:focus {
        outline: solid 2px #db2acf;
    }

    form label textarea {
        padding: 1rem;
        font-size: 1rem;
        width: 30vw;
    }

    form textarea:focus {
        outline: solid 2px #db2acf;
    }

    form #submit {
        width: 9vw;
        height: 6vh;
        border-radius: 6px;
        border: none;
        font-size: 1rem;
        background-color: #B91294;
        font-size: 1rem;
        color: #fff;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        cursor: pointer;
        transition: scale 0.2s ease;
    }

    form #submit:hover {
        background-color: #fff;
        color: #c7009c;
        scale: 1.05;  
    }

    form #submit:active {
        scale: 0.95;
    }

    @media (max-width: 480px) {
        .title-contact {
            width: 50vw;
        }

        form label input {
            width: 60vw;
            height: 7vh;
        }

        form label textarea {
            width: 60vw;
        }

        form #submit {
            width: 30vw;
        }
    }
`