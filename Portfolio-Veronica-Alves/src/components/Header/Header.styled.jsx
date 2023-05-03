import styled from "styled-components";

const HeaderStyled = styled.header`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

    display: flex;
    justify-content: space-around;
    margin-left: 20%;

    .container-button {
        display: flex;
    }

    button {
        background: transparent;
        border: none;
        border-radius: 8%;
        color: #fcfcfa;
        font-size: 1.5em;
        font-family: "Roboto", cursive;
        margin-top: 0.8em;
        margin-left: 2%;
        height: 70%;
        padding: 0.5em;
        transition: 0.5s;
    }

    button:hover {
        background: #222;
    }
`;

export default HeaderStyled;
