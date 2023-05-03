import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderStyled from "./Header.styled";
import Icons from "../Icons/Icons";

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderStyled>
            <div className="container-button">
                <button onClick={() => navigate("/")}>Início</button>
                <button onClick={() => navigate("/about")}>Sobre</button>
                <button onClick={() => navigate("/projects")}>Projetos</button>
            </div>
            <Icons />
        </HeaderStyled>
    );
};

export default Header;
