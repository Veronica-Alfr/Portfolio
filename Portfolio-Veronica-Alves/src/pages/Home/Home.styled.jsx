import styled from "styled-components";

const HomeStyled = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");

    font-family: "Libre Baskerville", serif;

    .content-home {
        margin: 10%;
        margin-left: 15%;
        display: flex;
        flex-direction: column;
    }

    .content-about {
        width: 40%;
    }

    h1 {
        font-size: 2em;
    }

    span {
        color: #803eee;
    }

    h3 {
        font-size: 1.3em;
        color: #c8a4fc;
        margin-top: -2%;
        margin-bottom: 2%;
    }

    p {
        font-size: 1.1em;
    }

    a {
        color: #ae77ff;
    }

    img {
        width: 30%;
        margin-left: 60%;
        margin-top: -26%;
        border-radius: 100%;
    }
`;

export default HomeStyled;
